import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FadeInSection from "./FadeInSection";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, display: 'flex' }}
        >

            <div className='joblist-job-title'>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >

                    <Tab label="Georgia Tech Research Institute" {...a11yProps(0)} />
                    <Tab label="Dell Technologies" {...a11yProps(1)} />
                    <Tab label="UC San Diego" {...a11yProps(2)} />
                    <Tab label="Insulet" {...a11yProps(3)} />

                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                <div className='joblist-job-title'>Research Intern</div>
                <div className='joblist-duration'> May 2022 - August 2022 </div>
                <FadeInSection>
                    <ul className='job-description'>
                        Implemented new features and screens for Delta in flight entertainment
                        to enable a bilingual and bluetooth feature for these devices using Android studio.
                    </ul>
                </FadeInSection>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='joblist-job-title'>Software Engineering Intern</div>
                <div className='joblist-duration'> June 2021 - September 2021</div>
                <FadeInSection>
                    <ul className='job-description'>
                        Implemented a connectivity component between Dell and the customer for Project APEX,
                        which creates “as a Service” experiences for a forward looking way of how we deliver technology to consume, deploy, and manage IT.
                    </ul>
                </FadeInSection>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className='joblist-job-title'>Triton Research Experiental Learning Scholar</div>
                <div className='joblist-program'>Undergraduate Researcher </div>
                <div className='joblist-duration'> June 2020 - February 2021</div>
                <FadeInSection>
                    <ul className='job-description'>
                        Developed a 6-week introductory computer science education program for high school students
                        focused on the intersection between computer science and social justice
                    </ul>
                </FadeInSection>
                <div className='joblist-job-title'>Early Research Scholars Program</div>
                <div className='joblist-program'>Undergraduate Researcher </div>
                <div className='joblist-duration'> September 2019 - November 2020 </div>
                <FadeInSection>
                    <ul className='job-description'>
                        Researched and developed a game application, CoverBot,
                        to incorporate statement coverage and gamification to help students efficiently test their code
                    </ul>
                </FadeInSection>
                <div className='joblist-job-title'>CSE Instructional Assistant</div>
                <div className='joblist-duration'> September 2020 - June 2021 </div>
                <FadeInSection>
                    <ul className='job-description'>
                        Assisted instructors by providing additional support, through tutoring sessions, for students in an introduction to programming class.
                        Facilitated lab sections designed to help students practice programming principles that were taught in class. Created programming
                        assignments and autograder scripts.
                    </ul>
                </FadeInSection>
                <div className='joblist-job-title'>CSE Diversity, Equity, and Inclusion(DEI) Committee</div>
                <div className='joblist-program'>Undergraduate Lead </div>
                <div className='joblist-duration'> September 2021 - June 2022 </div>
                <FadeInSection>
                    <ul className='job-description'>
                        Aid professors in including more inclusive practices in their curriculum. Create recruiting opportunities to
                        increase the recruitment and retention of underrepresented people into the computer science department.
                        Organize community-based events for the DEI community
                    </ul>
                </FadeInSection>
                <div className='joblist-job-title'>CSE Undergraduate Committee</div>
                <div className='joblist-program'>Undergraduate Lead </div>
                <div className='joblist-duration'> September 2020 - June 2021</div>
                <FadeInSection>
                    <ul className='job-description'>
                        Selected to serve as a student representative to provide insight on issues
                        pertaining to undergraduate students within the computer science department
                    </ul>
                </FadeInSection>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className='joblist-job-title'>Software Engineering Intern</div>
                <div className='joblist-duration'> July 2019 - September 2019 </div>
                <FadeInSection>
                    <ul className='job-description'>
                        Designed and developed a cloud software application to efficiently export data to different healthcare providers.
                        With this data doctors will be able to make therapy decision to their patients.
                    </ul>
                </FadeInSection>
            </TabPanel>

        </Box>
    );
}
