import React from 'react';
import { Container, Grid, Typography, Box, Divider, Chip, Link } from '@mui/material';
import { theme } from '../../constants/theme';
import MailLineIcon from 'remixicon-react/MailLineIcon';
import MapPinLineIcon from 'remixicon-react/MapPinLineIcon';
import GlobalLineIcon from 'remixicon-react/GlobalLineIcon';
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon';

const data = {
  personalInfo: {
    name: "Michael Kaaberbøl Guldborg",
    headline: "Full Stack Developer & Tech Lead | Fintech | React | NodeJS | DevOps | AWS",
    location: "Copenhagen, Denmark",
    email: "mail@michaelguldborg.dk",
    website: "michaelguldborg.dk",
    linkedin: "linkedin.com/in/michael-guldborg",
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
      company: "Resurs",
      role: "Full Stack Developer & Tech Lead",
      period: "Present",
      description: "Leading technical initiatives in the Fintech sector, focusing on React, NodeJS, and AWS cloud infrastructure."
    },
    {
      company: "MKG Software ApS",
      role: "Founder, Director & Owner",
      period: "2018 - Present",
      description: "Founder and director of software consultancy company providing specialized development services in web, mobile, and DevOps."
    },
    {
      company: "MinEjendom",
      role: "Frontend Developer (Flutter)",
      period: "2018 - 2022",
      description: "Developed and maintained a social platform for apartment buildings. Focused on building a cross-platform mobile application using Flutter."
    },
    {
      company: "InnoSocial ApS",
      role: "Software Developer",
      period: "2019 - 2021",
      description: "Contributed to projects like Headspace Admin and DiTi & DiKom, focusing on administrative systems and counseling platforms."
    }
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
    frontend: ["React", "TypeScript", "Flutter", "Material UI", "Emotion", "Vite"],
    backend: ["Node.js", "C# .Net Core", "PostgreSQL", "MongoDB"],
    devops: ["AWS", "CI/CD", "Docker", "Terraform", "GitHub Actions"],
    other: ["Agile", "Fintech", "Product Management", "UI/UX Design"]
  }
};

const CVPage = () => {
  return (
    <Box sx={{ bgcolor: theme.colors.backgroundGrey, minHeight: '100vh', pt: 12, pb: 8 }}>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', p: { xs: 3, md: 6 }, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          {/* Header */}
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" sx={{ fontWeight: 700, color: theme.colors.black, mb: 1 }}>
                {data.personalInfo.name}
              </Typography>
              <Typography variant="h6" sx={{ color: theme.colors.primary, fontWeight: 500, mb: 2 }}>
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
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src={data.personalInfo.profileImage}
                alt={data.personalInfo.name}
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: `4px solid ${theme.colors.lightBlue}`
                }}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Summary */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: theme.colors.black }}>
              Professional Summary
            </Typography>
            <Typography variant="body1" sx={{ color: theme.colors.darkGrey, lineHeight: 1.7 }}>
              {data.summary}
            </Typography>
          </Box>

          {/* Experience */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: theme.colors.black }}>
              Work Experience
            </Typography>
            {data.experience.map((exp, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Grid container justifyContent="space-between" alignItems="flex-start">
                  <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: theme.colors.black }}>
                      {exp.role}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: theme.colors.primary, fontWeight: 600 }}>
                      {exp.company}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} sx={{ textAlign: { sm: 'right' } }}>
                    <Typography variant="body2" sx={{ color: theme.colors.textGrey, fontWeight: 500 }}>
                      {exp.period}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body2" sx={{ mt: 1, color: theme.colors.darkGrey, lineHeight: 1.6 }}>
                  {exp.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Education */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: theme.colors.black }}>
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
          <Box sx={{ mb: 4 }}>
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
