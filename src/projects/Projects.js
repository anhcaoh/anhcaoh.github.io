import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const projects = [
            { name: 'Bitter UI',
            description: 'Data Transformation', 
            link: 'https://bitter-ui.herokuapp.com/',
            tags: ['POC', 'Startup', 'Fullstack', 
            'Engineering', 'Data Manipulation', 
            'ETL', 'User Interface'],
            },
            { name: 'RntHub.com',
            description: 'Person-to-person rental marketplace',
            link: 'https://rnthub.herokuapp.com/',
            tags: ['Entrepreneur', 'Startup', 'Fullstack', 
            'Engineering', 'SaaS', 'Cloud', 
            'Payment', 'Wallet', 'Stripe', 'Chat', 'Messaging'],
            },
            { name: 'GoLawCase',
            description: 'Legal Management and Marketing',
            link: 'https://anhcaoh.github.io/GoLawCase',
            tags: ['Entrepreneur', 'Consulting', '3D', 'User Interface', 
            'User Experience', 'HTML5', 'CSS3', 'Design']
            }
        ];
        let getSkillClass = ( skill ) => {
            let skillClass = 'badge-primary';
            let skillChecking = skill.toLowerCase();
            if ( skillChecking ===  'fullstack' || 
                skillChecking === 'engineering' || 
                skillChecking === 'data manipulation' || 
                skillChecking === 'etl' ||
                skillChecking === 'saas' || 
                skillChecking === 'cloud' ){
                skillClass = 'badge-success'
            } else if ( skillChecking === 'css3' || 
            skillChecking === 'html5' || 
            skillChecking === 'user interface' || 
            skillChecking === 'user experience' ||
            skillChecking === 'design' || 
            skillChecking === 'development' ) {
                skillClass = 'badge-info';
            } else if ( skillChecking === 'payment' || 
            skillChecking === 'wallet' || 
            skillChecking === 'stripe' || 
            skillChecking === 'chat' || 
            skillChecking === 'messaging' ) {
                skillClass = 'badge-danger';
            }
            return 'badge ' + skillClass + ' mr-2 mb-2 p-2'
        }
        let getProjectClass = (projectIndex) => {
            let projectClass = 'card-body project p-3';
            if( projectIndex < projects.length - 1 ){
                projectClass += ' border-right';
            }
            return projectClass;
        }
        return (
            <section className="projects p-4">
            <h2 className="p-4 ml-2 mr-2 mb-0 text-dark font-weight-bold">Projects</h2>
            <div className="d-flex flex-wrap mb-2">
                { projects.map( (project, i) => 
                    <div key={ project.name } className="col-md-4">
                    <div className="card mb-3 border-0">
                        <div className={ getProjectClass( i ) }>
                            <h6 className="card-title">
                                <a name="bitter" href={ project.link } 
                                target="_blank"  
                                title="bitter">{ project.name }</a>
                            </h6>
                            <p className="card-text">
                                { project.description }
                            </p>
                            <div className="tags skills applications text-light"> 
                                { project.tags.map( skill => 
                                    <span key={ skill } 
                                    className={ getSkillClass( skill ) }>
                                    { skill }
                                    </span>
                                )} 
                            </div>
                        </div>
                    </div>
                </div>
                )
                }
            </div>
            </section>
        );
    }
}

export default Projects;