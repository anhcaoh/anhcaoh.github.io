/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Latitude/longitude spherical geodesy formulae & scripts           (c) Chris Veness 2002-2015  */
/*   - www.movable-type.co.uk/scripts/latlong.html                                   MIT Licence  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

'use strict';
if (typeof module!='undefined' && module.exports) var Dms = require('./dms'); // CommonJS (Node)


/**
 * Creates a LatLon point on the earth's surface at the specified latitude / longitude.
 *
 * @classdesc Tools for geodetic calculations
 * @requires Dms from 'dms.js'
 *
 * @constructor
 * @param {number} lat - Latitude in degrees.
 * @param {number} lon - Longitude in degrees.
 *
 * @example
 *     var p1 = new LatLon(52.205, 0.119);
 */
function LatLon(lat, lon) {
    // allow instantiation without 'new'
    if (!(this instanceof LatLon)) return new LatLon(lat, lon);

    this.lat = Number(lat);
    this.lon = Number(lon);
}


/**
 * Returns the distance from 'this' point to destination point (using haversine formula).
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {number} Distance between this point and destination point, in same units as radius.
 *
 * @example
 *     var p1 = new LatLon(52.205, 0.119), p2 = new LatLon(48.857, 2.351);
 *     var d = p1.distanceTo(p2); // Number(d.toPrecision(4)): 404300
 */
LatLon.prototype.distanceTo = function(point, radius) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    var R = radius;
    var phi1 = this.lat.toRadians(),  lambda1 = this.lon.toRadians();
    var phi2 = point.lat.toRadians(), lambda2 = point.lon.toRadians();
    var deltaphi = phi2 - phi1;
    var deltlambda = lambda2 - lambda1;

    var a = Math.sin(deltaphi/2) * Math.sin(deltaphi/2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltlambda/2) * Math.sin(deltlambda/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;

    return d;
};


/**
 * Returns the (initial) bearing from 'this' point to destination point.
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @returns {number} Initial bearing in degrees from north.
 *
 * @example
 *     var p1 = new LatLon(52.205, 0.119), p2 = new LatLon(48.857, 2.351);
 *     var b1 = p1.bearingTo(p2); // b1.toFixed(1): 156.2
 */
LatLon.prototype.bearingTo = function(point) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');

    var phi1 = this.lat.toRadians(), phi2 = point.lat.toRadians();
    var deltlambda = (point.lon-this.lon).toRadians();

    // see http://mathforum.org/library/drmath/view/55417.html
    var y = Math.sin(deltlambda) * Math.cos(phi2);
    var x = Math.cos(phi1)*Math.sin(phi2) -
            Math.sin(phi1)*Math.cos(phi2)*Math.cos(deltlambda);
    var theta = Math.atan2(y, x);

    return (theta.toDegrees()+360) % 360;
};


/**
 * Returns final bearing arriving at destination destination point from 'this' point; the final bearing
 * will differ from the initial bearing by varying degrees according to distance and latitude.
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @returns {number} Final bearing in degrees from north.
 *
 * @example
 *     var p1 = new LatLon(52.205, 0.119), p2 = new LatLon(48.857, 2.351);
 *     var b2 = p1.finalBearingTo(p2); // b2.toFixed(1): 157.9
 */
LatLon.prototype.finalBearingTo = function(point) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');

    // get initial bearing from destination point to this point & reverse it by adding 180°
    return ( point.bearingTo(this)+180 ) % 360;
};


/**
 * Returns the midpoint between 'this' point and the supplied point.
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @returns {LatLon} Midpoint between this point and the supplied point.
 *
 * @example
 *     var p1 = new LatLon(52.205, 0.119), p2 = new LatLon(48.857, 2.351);
 *     var pMid = p1.midpointTo(p2); // pMid.toString(): 50.5363°N, 001.2746°E
 */
LatLon.prototype.midpointTo = function(point) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');

    // see http://mathforum.org/library/drmath/view/51822.html for derivation

    var phi1 = this.lat.toRadians(), lambda1 = this.lon.toRadians();
    var phi2 = point.lat.toRadians();
    var deltlambda = (point.lon-this.lon).toRadians();

    var Bx = Math.cos(phi2) * Math.cos(deltlambda);
    var By = Math.cos(phi2) * Math.sin(deltlambda);

    var phi3 = Math.atan2(Math.sin(phi1)+Math.sin(phi2),
             Math.sqrt( (Math.cos(phi1)+Bx)*(Math.cos(phi1)+Bx) + By*By) );
    var lambda3 = lambda1 + Math.atan2(By, Math.cos(phi1) + Bx);

    return new LatLon(phi3.toDegrees(), (lambda3.toDegrees()+540)%360-180); // normalise to −180…+180°
};


/**
 * Returns the destination point from 'this' point having travelled the given distance on the
 * given initial bearing (bearing normally varies around path followed).
 *
 * @param   {number} distance - Distance travelled, in same units as earth radius (default: metres).
 * @param   {number} bearing - Initial bearing in degrees from north.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {LatLon} Destination point.
 *
 * @example
 *     var p1 = new LatLon(51.4778, -0.0015);
 *     var p2 = p1.destinationPoint(7794, 300.7); // p2.toString(): 51.5135°N, 000.0983°W
 */
LatLon.prototype.destinationPoint = function(distance, bearing, radius) {
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    // see http://williams.best.vwh.net/avform.htm#LL

    var odelta = Number(distance) / radius; // angular distance in radians
    var theta = Number(bearing).toRadians();

    var phi1 = this.lat.toRadians();
    var lambda1 = this.lon.toRadians();

    var phi2 = Math.asin( Math.sin(phi1)*Math.cos(odelta) +
                        Math.cos(phi1)*Math.sin(odelta)*Math.cos(theta) );
    var lambda2 = lambda1 + Math.atan2(Math.sin(theta)*Math.sin(odelta)*Math.cos(phi1),
                             Math.cos(odelta)-Math.sin(phi1)*Math.sin(phi2));

    return new LatLon(phi2.toDegrees(), (lambda2.toDegrees()+540)%360-180); // normalise to −180…+180°
};


/**
 * Returns the point of intersection of two paths defined by point and bearing.
 *
 * @param   {LatLon} p1 - First point.
 * @param   {number} brng1 - Initial bearing from first point.
 * @param   {LatLon} p2 - Second point.
 * @param   {number} brng2 - Initial bearing from second point.
 * @returns {LatLon} Destination point (null if no unique intersection defined).
 *
 * @example
 *     var p1 = LatLon(51.8853, 0.2545), brng1 = 108.547;
 *     var p2 = LatLon(49.0034, 2.5735), brng2 =  32.435;
 *     var pInt = LatLon.intersection(p1, brng1, p2, brng2); // pInt.toString(): 50.9078°N, 004.5084°E
 */
LatLon.intersection = function(p1, brng1, p2, brng2) {
    if (!(p1 instanceof LatLon)) throw new TypeError('p1 is not LatLon object');
    if (!(p2 instanceof LatLon)) throw new TypeError('p2 is not LatLon object');

    // see http://williams.best.vwh.net/avform.htm#Intersection

    var phi1 = p1.lat.toRadians(), lambda1 = p1.lon.toRadians();
    var phi2 = p2.lat.toRadians(), lambda2 = p2.lon.toRadians();
    var theta13 = Number(brng1).toRadians(), theta23 = Number(brng2).toRadians();
    var deltaphi = phi2-phi1, deltlambda = lambda2-lambda1;

    var odelta12 = 2*Math.asin( Math.sqrt( Math.sin(deltaphi/2)*Math.sin(deltaphi/2) +
        Math.cos(phi1)*Math.cos(phi2)*Math.sin(deltlambda/2)*Math.sin(deltlambda/2) ) );
    if (odelta12 == 0) return null;

    // initial/final bearings between points
    var theta1 = Math.acos( ( Math.sin(phi2) - Math.sin(phi1)*Math.cos(odelta12) ) /
                        ( Math.sin(odelta12)*Math.cos(phi1) ) );
    if (isNaN(theta1)) theta1 = 0; // protect against rounding
    var theta2 = Math.acos( ( Math.sin(phi1) - Math.sin(phi2)*Math.cos(odelta12) ) /
                        ( Math.sin(odelta12)*Math.cos(phi2) ) );

    var theta12, theta21;
    if (Math.sin(lambda2-lambda1) > 0) {
        theta12 = theta1;
        theta21 = 2*Math.PI - theta2;
    } else {
        theta12 = 2*Math.PI - theta1;
        theta21 = theta2;
    }

    var alpha1 = (theta13 - theta12 + Math.PI) % (2*Math.PI) - Math.PI; // angle 2-1-3
    var alpha2 = (theta21 - theta23 + Math.PI) % (2*Math.PI) - Math.PI; // angle 1-2-3

    if (Math.sin(alpha1)==0 && Math.sin(alpha2)==0) return null; // infinite intersections
    if (Math.sin(alpha1)*Math.sin(alpha2) < 0) return null;      // ambiguous intersection

    //alpha1 = Math.abs(alpha1);
    //alpha2 = Math.abs(alpha2);
    // ... Ed Williams takes abs of alpha1/alpha2, but seems to break calculation?

    var alpha3 = Math.acos( -Math.cos(alpha1)*Math.cos(alpha2) +
                         Math.sin(alpha1)*Math.sin(alpha2)*Math.cos(odelta12) );
    var odelta13 = Math.atan2( Math.sin(odelta12)*Math.sin(alpha1)*Math.sin(alpha2),
                          Math.cos(alpha2)+Math.cos(alpha1)*Math.cos(alpha3) );
    var phi3 = Math.asin( Math.sin(phi1)*Math.cos(odelta13) +
                        Math.cos(phi1)*Math.sin(odelta13)*Math.cos(theta13) );
    var deltlambda13 = Math.atan2( Math.sin(theta13)*Math.sin(odelta13)*Math.cos(phi1),
                           Math.cos(odelta13)-Math.sin(phi1)*Math.sin(phi3) );
    var lambda3 = lambda1 + deltlambda13;

    return new LatLon(phi3.toDegrees(), (lambda3.toDegrees()+540)%360-180); // normalise to −180…+180°
};


/**
 * Returns (signed) distance from ‘this’ point to great circle defined by start-point and end-point.
 *
 * @param   {LatLon} pathStart - Start point of great circle path.
 * @param   {LatLon} pathEnd - End point of great circle path.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {number} Distance to great circle (-ve if to left, +ve if to right of path).
 *
 * @example
 *   var pCurrent = new LatLon(53.2611, -0.7972);
 *   var p1 = new LatLon(53.3206, -1.7297), p2 = new LatLon(53.1887, 0.1334);
 *   var d = pCurrent.crossTrackDistanceTo(p1, p2);  // Number(d.toPrecision(4)): -307.5
 */
LatLon.prototype.crossTrackDistanceTo = function(pathStart, pathEnd, radius) {
    if (!(pathStart instanceof LatLon)) throw new TypeError('pathStart is not LatLon object');
    if (!(pathEnd instanceof LatLon)) throw new TypeError('pathEnd is not LatLon object');
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    var odelta13 = pathStart.distanceTo(this, radius)/radius;
    var theta13 = pathStart.bearingTo(this).toRadians();
    var theta12 = pathStart.bearingTo(pathEnd).toRadians();

    var dxt = Math.asin( Math.sin(odelta13) * Math.sin(theta13-theta12) ) * radius;

    return dxt;
};


/**
 * Returns maximum latitude reached when travelling on a great circle on given bearing from this
 * point ('Clairaut's formula'). Negate the result for the minimum latitude (in the Southern
 * hemisphere).
 *
 * The maximum latitude is independent of longitude; it will be the same for all points on a given
 * latitude.
 *
 * @param {number} bearing - Initial bearing.
 * @param {number} latitude - Starting latitude.
 */
LatLon.prototype.maxLatitude = function(bearing) {
    var theta = Number(bearing).toRadians();

    var ophi = this.lat.toRadians();

    var ophiMax = Math.acos(Math.abs(Math.sin(theta)*Math.cos(ophi)));

    return ophiMax.toDegrees();
};


/**
 * Returns the pair of meridians at which a great circle defined by two points crosses the given
 * latitude. If the great circle doesn't reach the given latitude, null is returned.
 *
 * @param {LatLon} point1 - First point defining great circle.
 * @param {LatLon} point2 - Second point defining great circle.
 * @param {number} latitude - Latitude crossings are to be determined for.
 * @returns { { lon1, lon2 } } | null
 */
LatLon.crossingParallels = function(point1, point2, latitude) {
    var ophi = Number(latitude).toRadians();

    var phi1 = point1.lat.toRadians();
    var lambda1 = point1.lon.toRadians();
    var phi2 = point2.lat.toRadians();
    var lambda2 = point2.lon.toRadians();

    var deltlambda = lambda2 - lambda1;

    var x = Math.sin(phi1) * Math.cos(phi2) * Math.cos(ophi) * Math.sin(deltlambda);
    var y = Math.sin(phi1) * Math.cos(phi2) * Math.cos(ophi) * Math.cos(deltlambda) - Math.cos(phi1) * Math.sin(phi2) * Math.cos(ophi);
    var z = Math.cos(phi1) * Math.cos(phi2) * Math.sin(ophi) * Math.sin(deltlambda);

    if (z*z > x*x + y*y) return null; // great circle doesn't reach latitude

    var lambdam = Math.atan2(-y, x);                  // longitude at max latitude
    var deltlambdai = Math.acos(z / Math.sqrt(x*x+y*y)); // deltlambda from lambdam to intersection points

    var lambdami1 = lambda1 + lambdam - deltlambdai;
    var lambdami2 = lambda1 + lambdam + deltlambdai;

    return { lon1: (lambdami1.toDegrees()+540)%360-180, lon2: (lambdami2.toDegrees()+540)%360-180 }; // normalise to −180…+180°
};


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/**
 * Returns the distance travelling from 'this' point to destination point along a rhumb line.
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {number} Distance in km between this point and destination point (same units as radius).
 *
 * @example
 *     var p1 = new LatLon(51.127, 1.338), p2 = new LatLon(50.964, 1.853);
 *     var d = p1.distanceTo(p2); // Number(d.toPrecision(4)): 40310
 */
LatLon.prototype.rhumbDistanceTo = function(point, radius) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    // see http://williams.best.vwh.net/avform.htm#Rhumb

    var R = radius;
    var phi1 = this.lat.toRadians(), phi2 = point.lat.toRadians();
    var deltaphi = phi2 - phi1;
    var deltlambda = Math.abs(point.lon-this.lon).toRadians();
    // if dLon over 180° take shorter rhumb line across the anti-meridian:
    if (Math.abs(deltlambda) > Math.PI) deltlambda = deltlambda>0 ? -(2*Math.PI-deltlambda) : (2*Math.PI+deltlambda);

    // on Mercator projection, longitude distances shrink by latitude; q is the 'stretch factor'
    // q becomes ill-conditioned along E-W line (0/0); use empirical tolerance to avoid it
    var deltapsi = Math.log(Math.tan(phi2/2+Math.PI/4)/Math.tan(phi1/2+Math.PI/4));
    var q = Math.abs(deltapsi) > 10e-12 ? deltaphi/deltapsi : Math.cos(phi1);

    // distance is pythagoras on 'stretched' Mercator projection
    var odelta = Math.sqrt(deltaphi*deltaphi + q*q*deltlambda*deltlambda); // angular distance in radians
    var dist = odelta * R;

    return dist;
};


/**
 * Returns the bearing from 'this' point to destination point along a rhumb line.
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @returns {number} Bearing in degrees from north.
 *
 * @example
 *     var p1 = new LatLon(51.127, 1.338), p2 = new LatLon(50.964, 1.853);
 *     var d = p1.rhumbBearingTo(p2); // d.toFixed(1): 116.7
 */
LatLon.prototype.rhumbBearingTo = function(point) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');

    var phi1 = this.lat.toRadians(), phi2 = point.lat.toRadians();
    var deltlambda = (point.lon-this.lon).toRadians();
    // if dLon over 180° take shorter rhumb line across the anti-meridian:
    if (Math.abs(deltlambda) > Math.PI) deltlambda = deltlambda>0 ? -(2*Math.PI-deltlambda) : (2*Math.PI+deltlambda);

    var deltapsi = Math.log(Math.tan(phi2/2+Math.PI/4)/Math.tan(phi1/2+Math.PI/4));

    var theta = Math.atan2(deltlambda, deltapsi);

    return (theta.toDegrees()+360) % 360;
};


/**
 * Returns the destination point having travelled along a rhumb line from 'this' point the given
 * distance on the  given bearing.
 *
 * @param   {number} distance - Distance travelled, in same units as earth radius (default: metres).
 * @param   {number} bearing - Bearing in degrees from north.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {LatLon} Destination point.
 *
 * @example
 *     var p1 = new LatLon(51.127, 1.338);
 *     var p2 = p1.rhumbDestinationPoint(40300, 116.7); // p2.toString(): 50.9642°N, 001.8530°E
 */
LatLon.prototype.rhumbDestinationPoint = function(distance, bearing, radius) {
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    var odelta = Number(distance) / radius; // angular distance in radians
    var phi1 = this.lat.toRadians(), lambda1 = this.lon.toRadians();
    var theta = Number(bearing).toRadians();

    var deltaphi = odelta * Math.cos(theta);
    var phi2 = phi1 + deltaphi;

    // check for some daft bugger going past the pole, normalise latitude if so
    if (Math.abs(phi2) > Math.PI/2) phi2 = phi2>0 ? Math.PI-phi2 : -Math.PI-phi2;

    var deltapsi = Math.log(Math.tan(phi2/2+Math.PI/4)/Math.tan(phi1/2+Math.PI/4));
    var q = Math.abs(deltapsi) > 10e-12 ? deltaphi / deltapsi : Math.cos(phi1); // E-W course becomes ill-conditioned with 0/0

    var deltlambda = odelta*Math.sin(theta)/q;
    var lambda2 = lambda1 + deltlambda;

    return new LatLon(phi2.toDegrees(), (lambda2.toDegrees()+540)%360-180); // normalise to −180…+180°
};


/**
 * Returns the loxodromic midpoint (along a rhumb line) between 'this' point and second point.
 *
 * @param   {LatLon} point - Latitude/longitude of second point.
 * @returns {LatLon} Midpoint between this point and second point.
 *
 * @example
 *     var p1 = new LatLon(51.127, 1.338), p2 = new LatLon(50.964, 1.853);
 *     var p2 = p1.rhumbMidpointTo(p2); // p2.toString(): 51.0455°N, 001.5957°E
 */
LatLon.prototype.rhumbMidpointTo = function(point) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');

    // http://mathforum.org/kb/message.jspa?messageID=148837

    var phi1 = this.lat.toRadians(), lambda1 = this.lon.toRadians();
    var phi2 = point.lat.toRadians(), lambda2 = point.lon.toRadians();

    if (Math.abs(lambda2-lambda1) > Math.PI) lambda1 += 2*Math.PI; // crossing anti-meridian

    var phi3 = (phi1+phi2)/2;
    var f1 = Math.tan(Math.PI/4 + phi1/2);
    var f2 = Math.tan(Math.PI/4 + phi2/2);
    var f3 = Math.tan(Math.PI/4 + phi3/2);
    var lambda3 = ( (lambda2-lambda1)*Math.log(f3) + lambda1*Math.log(f2) - lambda2*Math.log(f1) ) / Math.log(f2/f1);

    if (!isFinite(lambda3)) lambda3 = (lambda1+lambda2)/2; // parallel of latitude

    return new LatLon(phi3.toDegrees(), (lambda3.toDegrees()+540)%360-180); // normalise to −180…+180°
};


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


/**
 * Returns a string representation of 'this' point, formatted as degrees, degrees+minutes, or
 * degrees+minutes+seconds.
 *
 * @param   {string} [format=dms] - Format point as 'd', 'dm', 'dms'.
 * @param   {number} [dp=0|2|4] - Number of decimal places to use - default 0 for dms, 2 for dm, 4 for d.
 * @returns {string} Comma-separated latitude/longitude.
 */
LatLon.prototype.toString = function(format, dp) {
    if (format === undefined) format = 'dms';

    return Dms.toLat(this.lat, format, dp) + ', ' + Dms.toLon(this.lon, format, dp);
};


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


/** Extend Number object with method to convert numeric degrees to radians */
if (Number.prototype.toRadians === undefined) {
    Number.prototype.toRadians = function() { return this * Math.PI / 180; };
}


/** Extend Number object with method to convert radians to numeric (signed) degrees */
if (Number.prototype.toDegrees === undefined) {
    Number.prototype.toDegrees = function() { return this * 180 / Math.PI; };
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
if (typeof module != 'undefined' && module.exports) module.exports = LatLon; // CommonJS (Node)
if (typeof define == 'function' && define.amd) define(['Dms'], function() { return LatLon; }); // AMD
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Geodesy representation conversion functions                       (c) Chris Veness 2002-2015  */
/*   - www.movable-type.co.uk/scripts/latlong.html                                   MIT Licence  */
/*                                                                                                */
/*  Sample usage:                                                                                 */
/*    var lat = Dms.parseDMS('51° 28′ 40.12″ N');                                                 */
/*    var lon = Dms.parseDMS('000° 00′ 05.31″ W');                                                */
/*    var p1 = new LatLon(lat, lon);                                                              */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

'use strict';


/**
 * Tools for converting between numeric degrees and degrees / minutes / seconds.
 *
 * @namespace
 */
var Dms = {};


// note Unicode Degree = U+00B0. Prime = U+2032, Double prime = U+2033


/**
 * Parses string representing degrees/minutes/seconds into numeric degrees.
 *
 * This is very flexible on formats, allowing signed decimal degrees, or deg-min-sec optionally
 * suffixed by compass direction (NSEW). A variety of separators are accepted (eg 3° 37′ 09″W).
 * Seconds and minutes may be omitted.
 *
 * @param   {string|number} dmsStr - Degrees or deg/min/sec in variety of formats.
 * @returns {number} Degrees as decimal number.
 */
Dms.parseDMS = function(dmsStr) {
    // check for signed decimal degrees without NSEW, if so return it directly
    if (typeof dmsStr == 'number' && isFinite(dmsStr)) return Number(dmsStr);

    // strip off any sign or compass dir'n & split out separate d/m/s
    var dms = String(dmsStr).trim().replace(/^-/, '').replace(/[NSEW]$/i, '').split(/[^0-9.,]+/);
    if (dms[dms.length-1]=='') dms.splice(dms.length-1);  // from trailing symbol

    if (dms == '') return NaN;

    // and convert to decimal degrees...
    var deg;
    switch (dms.length) {
        case 3:  // interpret 3-part result as d/m/s
            deg = dms[0]/1 + dms[1]/60 + dms[2]/3600;
            break;
        case 2:  // interpret 2-part result as d/m
            deg = dms[0]/1 + dms[1]/60;
            break;
        case 1:  // just d (possibly decimal) or non-separated dddmmss
            deg = dms[0];
            // check for fixed-width unseparated format eg 0033709W
            //if (/[NS]/i.test(dmsStr)) deg = '0' + deg;  // - normalise N/S to 3-digit degrees
            //if (/[0-9]{7}/.test(deg)) deg = deg.slice(0,3)/1 + deg.slice(3,5)/60 + deg.slice(5)/3600;
            break;
        default:
            return NaN;
    }
    if (/^-|[WS]$/i.test(dmsStr.trim())) deg = -deg; // take '-', west and south as -ve

    return Number(deg);
};


/**
 * Converts decimal degrees to deg/min/sec format
 *  - degree, prime, double-prime symbols are added, but sign is discarded, though no compass
 *    direction is added.
 *
 * @private
 * @param   {number} deg - Degrees to be formatted as specified.
 * @param   {string} [format=dms] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
 * @param   {number} [dp=0|2|4] - Number of decimal places to use – default 0 for dms, 2 for dm, 4 for d.
 * @returns {string} Degrees formatted as deg/min/secs according to specified format.
 */
Dms.toDMS = function(deg, format, dp) {
    if (isNaN(deg)) return null;  // give up here if we can't make a number from deg

    // default values
    if (format === undefined) format = 'dms';
    if (dp === undefined) {
        switch (format) {
            case 'd':    case 'deg':         dp = 4; break;
            case 'dm':   case 'deg+min':     dp = 2; break;
            case 'dms':  case 'deg+min+sec': dp = 0; break;
            default:    format = 'dms'; dp = 0;  // be forgiving on invalid format
        }
    }

    deg = Math.abs(deg);  // (unsigned result ready for appending compass dir'n)

    var dms, d, m, s;
    switch (format) {
        default: // invalid format spec!
        case 'd': case 'deg':
            d = deg.toFixed(dp);    // round degrees
            if (d<100) d = '0' + d; // pad with leading zeros
            if (d<10) d = '0' + d;
            dms = d + '°';
            break;
        case 'dm': case 'deg+min':
            var min = (deg*60).toFixed(dp); // convert degrees to minutes & round
            d = Math.floor(min / 60);       // get component deg/min
            m = (min % 60).toFixed(dp);     // pad with trailing zeros
            if (d<100) d = '0' + d;         // pad with leading zeros
            if (d<10) d = '0' + d;
            if (m<10) m = '0' + m;
            dms = d + '°' + m + '′';
            break;
        case 'dms': case 'deg+min+sec':
            var sec = (deg*3600).toFixed(dp); // convert degrees to seconds & round
            d = Math.floor(sec / 3600);       // get component deg/min/sec
            m = Math.floor(sec/60) % 60;
            s = (sec % 60).toFixed(dp);       // pad with trailing zeros
            if (d<100) d = '0' + d;           // pad with leading zeros
            if (d<10) d = '0' + d;
            if (m<10) m = '0' + m;
            if (s<10) s = '0' + s;
            dms = d + '°' + m + '′' + s + '″';
        break;
    }

    return dms;
};


/**
 * Converts numeric degrees to deg/min/sec latitude (2-digit degrees, suffixed with N/S).
 *
 * @param   {number} deg - Degrees to be formatted as specified.
 * @param   {string} [format=dms] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
 * @param   {number} [dp=0|2|4] - Number of decimal places to use – default 0 for dms, 2 for dm, 4 for d.
 * @returns {string} Degrees formatted as deg/min/secs according to specified format.
 */
Dms.toLat = function(deg, format, dp) {
    var lat = Dms.toDMS(deg, format, dp);
    return lat===null ? '–' : lat.slice(1) + (deg<0 ? 'S' : 'N');  // knock off initial '0' for lat!
};


/**
 * Convert numeric degrees to deg/min/sec longitude (3-digit degrees, suffixed with E/W)
 *
 * @param   {number} deg - Degrees to be formatted as specified.
 * @param   {string} [format=dms] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
 * @param   {number} [dp=0|2|4] - Number of decimal places to use – default 0 for dms, 2 for dm, 4 for d.
 * @returns {string} Degrees formatted as deg/min/secs according to specified format.
 */
Dms.toLon = function(deg, format, dp) {
    var lon = Dms.toDMS(deg, format, dp);
    return lon===null ? '–' : lon + (deg<0 ? 'W' : 'E');
};


/**
 * Converts numeric degrees to deg/min/sec as a bearing (0°..360°)
 *
 * @param   {number} deg - Degrees to be formatted as specified.
 * @param   {string} [format=dms] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
 * @param   {number} [dp=0|2|4] - Number of decimal places to use – default 0 for dms, 2 for dm, 4 for d.
 * @returns {string} Degrees formatted as deg/min/secs according to specified format.
 */
Dms.toBrng = function(deg, format, dp) {
    deg = (Number(deg)+360) % 360;  // normalise -ve values to 180°..360°
    var brng =  Dms.toDMS(deg, format, dp);
    return brng===null ? '–' : brng.replace('360', '0');  // just in case rounding took us up to 360°!
};


/**
 * Returns compass point (to given precision) for supplied bearing.
 *
 * @param   {number} bearing - Bearing in degrees from north.
 * @param   {number} [precision=3] - Precision (cardinal / intercardinal / secondary-intercardinal).
 * @returns {string} Compass point for supplied bearing.
 *
 * @example
 *   var point = Dms.compassPoint(24);    // point = 'NNE'
 *   var point = Dms.compassPoint(24, 1); // point = 'N'
 */
Dms.compassPoint = function(bearing, precision) {
    if (precision === undefined) precision = 3;
    // note precision = max length of compass point; it could be extended to 4 for quarter-winds
    // (eg NEbN), but I think they are little used

    bearing = ((bearing%360)+360)%360; // normalise to 0..360

    var point;

    switch (precision) {
        case 1: // 4 compass points
            switch (Math.round(bearing*4/360)%4) {
                case 0: point = 'N'; break;
                case 1: point = 'E'; break;
                case 2: point = 'S'; break;
                case 3: point = 'W'; break;
            }
            break;
        case 2: // 8 compass points
            switch (Math.round(bearing*8/360)%8) {
                case 0: point = 'N';  break;
                case 1: point = 'NE'; break;
                case 2: point = 'E';  break;
                case 3: point = 'SE'; break;
                case 4: point = 'S';  break;
                case 5: point = 'SW'; break;
                case 6: point = 'W';  break;
                case 7: point = 'NW'; break;
            }
            break;
        case 3: // 16 compass points
            switch (Math.round(bearing*16/360)%16) {
                case  0: point = 'N';   break;
                case  1: point = 'NNE'; break;
                case  2: point = 'NE';  break;
                case  3: point = 'ENE'; break;
                case  4: point = 'E';   break;
                case  5: point = 'ESE'; break;
                case  6: point = 'SE';  break;
                case  7: point = 'SSE'; break;
                case  8: point = 'S';   break;
                case  9: point = 'SSW'; break;
                case 10: point = 'SW';  break;
                case 11: point = 'WSW'; break;
                case 12: point = 'W';   break;
                case 13: point = 'WNW'; break;
                case 14: point = 'NW';  break;
                case 15: point = 'NNW'; break;
            }
            break;
        default:
            throw new RangeError('Precision must be between 1 and 3');
    }

    return point;
};


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


/** Polyfill String.trim for old browsers
 *  (q.v. blog.stevenlevithan.com/archives/faster-trim-javascript) */
if (String.prototype.trim === undefined) {
    String.prototype.trim = function() {
        return String(this).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    };
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
if (typeof module != 'undefined' && module.exports) module.exports = Dms; // CommonJS (Node)
if (typeof define == 'function' && define.amd) define([], function() { return Dms; }); // AMD