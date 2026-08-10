import React from "react";
import "../styles/Projects.css";

interface Publication {
    title: string;
    authors: string;
    venue?: string;
    year: string;
    award?: string;
    article?: { label: string; icon: string; url: string }[];
}

// Ordered exactly as returned by Google Scholar (sortby=pubdate), newest first.
const publications: Publication[] = [
    {
        title: "Not Built for Us: Marginalized Students' Visions for Help-Seeking in Computing Education",
        authors: "Belén Edgar*, Eman Sherif*, Janet Jiang, Saara Uthmaan, Amy J. Ko",
        venue: "ICER",
        year: "2026",
    },
    {
        title: "Student Experiences of Joyful Secondary CS Classrooms",
        authors: "Jayne Everson, Rotem Landesman, Janet Jiang, F. Megumi Kivuva, Eman Sherif, Amy J. Ko",
        year: "2026",
        venue: "ICER",
    },
    {
        title: "Reimagining Assessment: How Co-construction Shifts Agency in Computer Science Classrooms",
        authors: "Eman Sherif, Rayana Lyons, Isabel Amaya, Amy J. Ko",
        venue: "RESPECT",
        year: "2026",
        article: [{ label: "Paper", icon: "🔗", url: "https://dl.acm.org/doi/pdf/10.1145/3796496.3811802" }],
    },
    {
        title: "Deconstructing Conceptions of Rigor in Computer Science Education",
        authors: "Jayne Everson, F. Megumi Kivuva, Eman Sherif, Alannah Oleson, Amy J. Ko",
        venue: "TOCE",
        year: "2026",
        article: [{ label: "Paper", icon: "🔗", url: "https://dl.acm.org/doi/pdf/10.1145/3776542" }],
    },
    {
        title: "Systems, Values, and Conceptions Shaping Computing Education in Refugee Support Organizations",
        authors: "F. Megumi Kivuva, Eman Sherif, Belén Edgar, Amy J. Ko",
        venue: "ISLS",
        year: "2026",
    },
    {
        title: "African data ethics: a discursive framework for black decolonial AI",
        authors: "Teanna Barrett, Chinasa T. Okolo, B Biira, Eman Sherif, Amy Zhang, Leilani Battle",
        venue: "FAccT",
        year: "2025",
        article: [{ label: "Paper", icon: "🔗", url: "https://dl.acm.org/doi/pdf/10.1145/3715275.3732023" }],
    },
    {
        title: "Scalable Community Mentorship: A Vision for Engineering Literacy & Access",
        authors: "Kyle Johnson*, Vicente Arroyos*, Liban Hussein*, Aisha Cora*, Eman Sherif*, Celeste Garcia*, Teanna Barrett*, Saara Uthmaan*, Samira Shirazy*, Jay Cunningham, R Benjamin Shapiro, Vikram Iyer",
        venue: "WEEF",
        year: "2024",
        article: [{ label: "Paper", icon: "🔗", url: "https://ieeexplore.ieee.org/abstract/document/10854949" }],
    },
    {
        title: "Exploring the Impact of Assessment Policies on Marginalized Students' Experiences in Post-Secondary Programming Courses",
        authors: "Eman Sherif, Jayne Everson, F. Megumi Kivuva, Mara Kirdani-Ryan, Amy J. Ko",
        venue: "ICER",
        year: "2024",
        article: [{ label: "Paper", icon: "🔗", url: "https://dl.acm.org/doi/pdf/10.1145/3632620.3671100" }]
    },
    {
        title: "Liberatory Computing Education for African American Students",
        authors: "Raechel Walker, Eman Sherif, Cynthia Breazeal",
        venue: "RESPECT",
        year: "2022",
        award: "🏆 Best Paper Award",
        article: [{ label: "Paper", icon: "🔗", url: "https://www.researchgate.net/profile/Raechel-Walker/publication/376353887_Liberatory_Computing_Education_for_African_American_Students/links/65e8bf0cc3b52a11701b9cb1/Liberatory-Computing-Education-for-African-American-Students.pdf" }],
    },
    {
        title: "Gamification to Aid the Learning of Test Coverage Concepts",
        authors: "Eman Sherif*, Andy Liu*, Brian Nguyen*, Sorin Lerner, William G Griswold",
        venue: "CSEE&T",
        year: "2020",
        article: [{ label: "Paper", icon: "🔗", url: "https://www.cs.cornell.edu/~lerner/papers/Gamification_to_Aid_the_Learning_of_Test_Coverage_Concepts.pdf" }],
    }
];

class Projects extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            expanded: true,
            activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey: any) {
        this.setState({
            activeKey: eventKey
        });
    }
    render() {
        return (
            <div id="projects">
                <div className="section-header">
                    <span className="section-title">Publications</span>
                </div>
                <div className="entry-award">
                    <p> You can also find my articles on my <a href="https://scholar.google.com/citations?user=kxpibVwAAAAJ&hl=en">Google Scholar profile</a></p>
                    <p> * = equal contribution </p>
                </div>

                <div className="publication-list">
                    {publications.map((pub, i) => (
                        <div className="entry" key={i}>
                            <div className="entry-eyebrow">
                                <span className="entry-badge">
                                    {pub.venue ? pub.venue : "Publication"}
                                    {pub.year ? ` · ${pub.year}` : ""}
                                </span>
                            </div>
                            <h3 className="entry-title">{pub.title}</h3>
                            <p className="entry-authors">
                                {pub.authors.split(", ").map((a, j, arr) => (
                                    <React.Fragment key={j}>
                                        <span className={a.includes("Sherif") ? "me" : ""}>{a}</span>

                                        {j < arr.length - 1 ? ",\u2002" : ""}
                                    </React.Fragment>

                                ))}
                            </p>
                            <p className="entry-award">
                                {pub.award}
                            </p>
                            {pub.article && pub.article.length > 0 && (
                                <div className="entry-links">
                                    {pub.article.map((l, j) => (
                                        <a
                                            key={j}
                                            href={l.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="entry-link"
                                        >
                                            {l.icon} {l.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;