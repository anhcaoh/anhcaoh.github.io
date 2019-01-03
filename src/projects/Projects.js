import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const projects = [
            { name: 'Bitter UI',
            description: 'Data Transformation', 
            link: 'https://bitter-ui.herokuapp.com/',
            tags: ['POC', 'Startup', 'Fullstack', 
            'Engineering', 'Data Manipulation', 
            'ETL', 'User Interface','JSON', 'CSV'],
            },
            { name: 'RntHub.com',
            description: 'Person-to-person rental marketplace',
            link: 'https://rnthub.herokuapp.com/',
            tags: ['Entrepreneur', 'Startup', 'Fullstack', 
            'Engineering', 'SaaS', 'Cloud', 'Web',
            'Payment', 'Wallet', 'Stripe', 'Chat', 'Messaging'],
            },
            { name: 'GoLawCase',
            description: 'Legal Management and Marketing',
            link: 'https://anhcaoh.github.io/GoLawCase',
            tags: ['Entrepreneur', 'Consulting', 'Website', 'User Interface', 
            'User Experience', 'HTML5', 'CSS3', 'Design']
            },
            { name: '#ChallengeOfTheDay',
            description: 'Gamification: Daily challenge (Mobile Web)',
            link: 'https://challenge-of-the-day.herokuapp.com',
            tags: ['Entrepreneur', 'Gaming', 'Mobile', 'Web', 'User Interface', 
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
            let projectClass = 'card-body project p-4';
            return projectClass;
        }
        return (
            <section id="projects" className="projects pr-4 pb-4 pl-4 bg-grad-clouds"
            style={{ paddingTop: '8rem'}}>
                <h2 className="p-4 ml-2 mr-2 mb-0 text-dark font-weight-bold">Projects</h2>
                <div className="d-flex flex-wrap mb-2">
                    { projects.map( (project, i) => 
                        <div key={ project.name } className="col-md-6">
                        <div className="card mb-3 border-0 shadow-sm">
                            <div className={ getProjectClass( i ) }>
                                <h6 className="card-title">
                                    <a name="bitter" href={ project.link } 
                                    target="_blank"  
                                    title="bitter">{ project.name }</a>
                                </h6>
                                <p className="card-text">
                                    { project.description }
                                </p>
                                <div className="tags skills applications text-light col-sm-12 col-md-7 col-lg-6 pl-3  border-left"> 
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