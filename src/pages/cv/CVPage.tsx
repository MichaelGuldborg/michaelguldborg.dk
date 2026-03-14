import React from 'react';
import {Container, Grid, Typography, Box, Divider, Chip, Link, Stack, Button} from '@mui/material';
import { theme } from '../../constants/theme';
import MailLineIcon from 'remixicon-react/MailLineIcon';
import MapPinLineIcon from 'remixicon-react/MapPinLineIcon';
import GlobalLineIcon from 'remixicon-react/GlobalLineIcon';
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import PhoneLineIcon from 'remixicon-react/PhoneLineIcon';
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon';

const data = {
  personalInfo: {
    name: "Michael Kaaberbøl Guldborg",
    headline: "Full Stack Developer & Tech Lead",
    location: "Copenhagen, Denmark",
    email: "mail@michaelguldborg.dk",
    phone: "+45 21 13 13 91",
    website: "michaelguldborg.dk",
    linkedin: "linkedin.com/in/michael-guldborg",
    github: "github.com/MichaelGuldborg",
    profileImage: "profile.jpg",
    languages: [
      { language: "Dansk", proficiency: "Native" },
      { language: "English", proficiency: "Fluent" },
      { language: "German", proficiency: "Elementary" },
    ]
  },
  summary: "Senior Full Stack Developer & Tech Lead specializing in React Web Development, React-Native/Flutter Mobile Development, and DevOps Engineering." +
      "Passionate about creating user-friendly interfaces and scalable pipelines for continuous value delivery. Experienced in Fintech, AWS, and modern web architectures.",
  experience: [
    {
      company: "Resurs Bank AB",
      role: "Senior Full Stack Developer",
      contract: "Consultant",
      period: "2024 - Present",
      description: "Senior developer and consultant at Resurs Bank, driving technical excellence and modernization across the Onlinebank platform.",
      bullets: [{
        title: "Scrum master",
        description: "Worked closely with the PO to refine and prioritize the product backlog, structuring the team’s workload and removing blockers before they hit development."
      }, {
        title: "European Accessibility Act",
        description: "Defined the framework for updating and ensuring that the Onlinebank web app met the EAA regulatory requirements."
      }, {
        title: "CI/CD Modernization",
        description: "Replaced legacy Jenkins pipelines with GitHub Actions, streamlining the deployment process and reducing build infrastructure overhead."
      }, {
        title: "Infrastructure Migration",
        description: "Participated in the migration from on-premise servers to AWS (EKS/Kubernetes), ensuring zero downtime for all production services during the transition."
      }],
    },
    {
      company: "Resurs Bank AB",
      contract: "Consultant",
      role: "Lead Frontend Developer",
      period: "2022 - 2024",
      description: "Led the in-housing and successful launch of the new Onlinebank web application, building a robust frontend architecture and team.",
      bullets: [{
        title: "Launch Success",
        description: "Led the transition of the Onlinebank web app from an external vendor to an in-house team, successfully launching the new platform to 600k+ monthly active users."
      }, {
        title: "Architectural Ownership",
        description: "Selected the tech stack and designed the architecture for the in-house Onlinebank web application."
      }, {
        title: "Mobile App Overhaul",
        description: "Took leadership of the transition from JavaScript to TypeScript for the mobile app project to improve stability and development speed."
      }, {
        title: "Knowledge Transfer",
        description: "Led the effort to create an extensive feature documentation to help onboard new PO, managers, and developers"
      }],
    },
    {
      company: "MKG Software ApS",
      contract: "Owner",
      role: "Founder, Director & Owner",
      period: "2018 - Present",
      description: "Founder and owner of MKG Software ApS based in Copenhagen.\n" +
          "Working as a freelance contractor as a Senior Full Stack Developer and Software Architect.\n" +
          "Technologies used: React, React-Native, Typescript, NodeJS, Flutter, Java, C#, GitHub workflows, AWS, Claude Code"
    },
    {
      company: "InnoSocial ApS",
      contract: "Partner",
      role: "Software Developer",
      period: "2019 - 2021",
      description: "Coordinated a team of 5 developers and acted as both product owner and full stack developer. We developed and launched software projects like Headspace Admin, DiTi & DiKom focusing on administrative systems and counseling platforms."
    },
    {
      company: "MinEjendom",
      contract: "Part Time",
      role: "Frontend Developer (Flutter)",
      period: "2018 - 2022",
      description: "Developed and maintained a social platform for apartment buildings. Focused on building a cross-platform mobile application using Flutter."
    },
  ],
  education: [
    {
      institution: "Technical University of Denmark (DTU)",
      degree: "MSc Digital Media Engineering",
      period: "2020 - 2022",
      description: "Specialized in software development, AI, and digital media. Thesis: Complex Figure Test."
    },
    {
      institution: "Technical University of Denmark (DTU)",
      degree: "BSc Software Technology",
      period: "2017 - 2020",
      description: "Foundational software engineering principles, algorithms, and web technologies."
    }
  ],
  projects: [
    {
      name: "CitySurfing",
      period: "2021 - Present",
      description: "A community-driven Flutter application designed as an alternative to CouchSurfing."
    },
    {
      name: "Achievement",
      period: "2021",
      description: "A web platform for setting and tracking life goals and bucket lists."
    },
    {
      name: "DiTi & DiKom",
      period: "2021",
      description: "Counseling platforms for kids and adolescents, built with Flutter, React, and .NET Core."
    }
  ],
  skills: {
    frontend: ["React",'React-Native', "TypeScript", 'Tan-stack', "Flutter", "Material UI", "Emotion", "Vite"],
    backend: ["Node.js", 'Java SpringBoot', "C# .Net Core", "PostgreSQL", "MongoDB", 'Firebase'],
    devops: ["AWS", "CI/CD", "Docker", "Terraform", "GitHub Actions"],
    other: ["Agile", "Fintech", "Product Management", "UI/UX Design"]
  }
};

const CVPage = () => {
  return (
    <Box sx={{
      bgcolor: theme.colors.backgroundGrey,
      minHeight: '100vh',
      pt: 12,
      pb: 8,
      '@media print': {
        bgcolor: 'white',
        pt: 0,
        pb: 0,
      }
    }}>
      <Container maxWidth="md" sx={{
        '@media print': {
          maxWidth: 'none',
          p: 0,
        }
      }}>
        <Box sx={{
          bgcolor: 'white',
          p: { xs: 3, md: 3 },
          pt: { xs: 8, md: 8 },
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          position: 'relative',
          '@media print': {
            boxShadow: 'none',
            p: 0,
            borderRadius: 0,
          }
        }}>
          {/* Download Button */}
          <Box sx={{
            position: 'absolute',
            top: { xs: '12px', md: '12px' },
            right: { xs: '12px', md: '12px' },
            '@media print': { display: 'none' }
          }}>
            <Button
              variant="outlined"
              startIcon={<DownloadLineIcon size={18} />}
              onClick={() => window.print()}
              sx={{
                color: theme.colors.primary,
                borderColor: theme.colors.lightBlue,
                '&:hover': {
                  borderColor: theme.colors.primary,
                  bgcolor: theme.colors.lightBlue,
                },
                textTransform: 'none',
                fontWeight: 600
              }}
            >
              Download PDF
            </Button>
          </Box>

          {/* Header */}
          <Grid container spacing={4} alignItems="center" sx={{
            '@media print': {
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'flex-start'
            }
          }}>
            <Grid item xs={12} md={8} >
              <Typography variant="h4" sx={{
                fontWeight: 700,
                color: theme.colors.black,
                mb: 1,
                '@media print': {
                  fontSize: '2rem'
                }
              }}>
                {data.personalInfo.name}
              </Typography>
              <Typography variant="h6" sx={{
                color: theme.colors.primary,
                fontWeight: 500,
                mb: 2,
              }}>
                {data.personalInfo.headline}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: theme.colors.darkGrey }}>
                  <MapPinLineIcon size={18} />
                  <Typography variant="body2">{data.personalInfo.location}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: theme.colors.darkGrey }}>
                  <MailLineIcon size={18} />
                  <Link href={`mailto:${data.personalInfo.email}`} color="inherit" underline="hover">
                    <Typography variant="body2">{data.personalInfo.email}</Typography>
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: theme.colors.darkGrey }}>
                  <PhoneLineIcon size={18} />
                  <Link href={`tel:${data.personalInfo.phone.replace(/\s/g, '')}`} color="inherit" underline="hover">
                    <Typography variant="body2">{data.personalInfo.phone}</Typography>
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: theme.colors.darkGrey }}>
                  <GlobalLineIcon size={18} />
                  <Link href={`https://${data.personalInfo.website}`} target="_blank" color="inherit" underline="hover">
                    <Typography variant="body2">{data.personalInfo.website}</Typography>
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: theme.colors.darkGrey }}>
                  <LinkedinBoxFillIcon size={18} />
                  <Link href={`https://${data.personalInfo.linkedin}`} target="_blank" color="inherit" underline="hover">
                    <Typography variant="body2">LinkedIn</Typography>
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: theme.colors.darkGrey }}>
                  <GithubFillIcon size={18} />
                  <Link href={`https://${data.personalInfo.github}`} target="_blank" color="inherit" underline="hover">
                    <Typography variant="body2">GitHub</Typography>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{
              display: 'flex',
              justifyContent: 'center',
              '@media print': {
                width: '30%',
                flexBasis: '30%',
                maxWidth: '30%',
                justifyContent: 'flex-end'
              }
            }}>
              <Box
                component="img"
                src={data.personalInfo.profileImage}
                alt={data.personalInfo.name}
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: `4px solid ${theme.colors.lightBlue}`,
                  '@media print': {
                    width: 120,
                    height: 120
                  }
                }}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          {/* Summary */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: theme.colors.black }}>
              Professional Summary
            </Typography>
            <Typography variant="body1" sx={{ color: theme.colors.darkGrey, lineHeight: 1.7 }}>
              {data.summary}
            </Typography>
          </Box>

          {/* Experience */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: theme.colors.black }}>
              Work Experience
            </Typography>
            {data.experience.map((exp, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Grid container justifyContent="space-between" alignItems="flex-start">
                  <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: theme.colors.black }}>
                      {exp.role}
                    </Typography>
                    <Stack direction="row" alignItems="center">
                      <Typography variant="subtitle2" sx={{ color: theme.colors.primary, fontWeight: 600 }}>
                        {exp.company}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: theme.colors.textGrey, marginLeft: '4px', fontWeight: 600 }}>
                        {exp.contract && `• ${exp.contract}`}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={4} sx={{ textAlign: { sm: 'right' } }}>
                    <Typography variant="body2" sx={{ color: theme.colors.textGrey, fontWeight: 500 }}>
                      {exp.period}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body2" sx={{ mt: 1, color: theme.colors.darkGrey, lineHeight: 1.6, whiteSpace: 'break-spaces' }}>
                  {exp.description}
                </Typography>
                {exp.bullets && (
                  <Box component="ul" sx={{ mt: 1, pl: 2, color: theme.colors.darkGrey }}>
                    {exp.bullets.map((bullet, bIndex) => (
                      <Box component="li" key={bIndex} sx={{ mb: 0.5 }}>
                        <Typography variant="body2" sx={{ color: theme.colors.darkGrey, lineHeight: 1.6 }}>
                          <Box component="span" sx={{ fontWeight: 600, color: theme.colors.black }}>{bullet.title}:</Box> {bullet.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          {/* Education */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: theme.colors.black }}>
              Education
            </Typography>
            {data.education.map((edu, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: theme.colors.black }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: theme.colors.primary }}>
                      {edu.institution}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" sx={{ color: theme.colors.textGrey }}>
                      {edu.period}
                    </Typography>
                  </Grid>
                </Grid>
                {edu.description && (
                  <Typography variant="body2" sx={{ mt: 0.5, color: theme.colors.darkGrey }}>
                    {edu.description}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>

          {/* Skills */}
          <Box sx={{ mb: 2}}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: theme.colors.black }}>
              Technical Skills
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(data.skills).map(([category, skills]) => (
                <Grid item xs={12} sm={6} key={category}>
                  <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', mb: 1, color: theme.colors.black, fontWeight: 600 }}>
                    {category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: theme.colors.lightBlue,
                          color: theme.colors.primary,
                          fontWeight: 500,
                          borderRadius: '4px'
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Languages */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: theme.colors.black }}>
              Languages
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {data.personalInfo.languages.map((lang) => (
                <Box key={lang.language}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: theme.colors.black }}>
                    {lang.language}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.colors.textGrey }}>
                    {lang.proficiency}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CVPage;
