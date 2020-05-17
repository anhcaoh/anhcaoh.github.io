npm run build
rm -rf index.html static/*
cp -rf build/index.html . && cp -rf build/static/* static
git add index.html static