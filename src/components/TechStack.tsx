import { Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";
import { motion } from "framer-motion";

const TechStack = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Python", progress: 95 },
        { name: "Java", progress: 90 },
        { name: "JavaScript", progress: 80 },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "Django", progress: 95 },
        { name: "Spring Boot", progress: 90 },
        { name: "Node.js", progress: 75 },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", progress: 95 },
        { name: "MongoDB", progress: 90 },
        { name: "Redis", progress: 80 },
      ],
    },
    {
      category: "Cloud Services",
      items: [
        { name: "AWS", progress: 90 },
        { name: "Docker", progress: 85 },
        { name: "Kubernetes", progress: 75 },
      ],
    },
    {
      category: "Development Tools",
      items: [
        { name: "Git", progress: 95 },
        { name: "Jenkins", progress: 85 },
        { name: "Jira", progress: 90 },
      ],
    },
    {
      category: "Testing",
      items: [
        { name: "JUnit", progress: 90 },
        { name: "PyTest", progress: 85 },
        { name: "Postman", progress: 95 },
      ],
    },
  ];

  return (
    <section id="techstack" className="px-6 py-12 bg-neutral-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Typography
            variant="h3"
            color="white"
            gutterBottom
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
            //   textTransform: "uppercase",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Technical Stack
          </Typography>
          <Typography
            color="white"
            maxWidth="lg"
            mx="auto"
            textAlign="center"
            sx={{ fontSize: 16, lineHeight: 1.8 }}
          >
            Specialized in modern backend technologies and frameworks for building scalable applications
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card
                sx={{
                  background: "linear-gradient(145deg, #2a2a2a, #111111)", // Dark gradient for the background
                  color: "white",
                  borderRadius: 3,
                  padding: 3,
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)", // Soft shadow to give depth
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)", // Enhanced shadow on hover
                    transition: "all 0.3s ease-in-out",
                  },
                }}
                elevation={3}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    color="white"
                    gutterBottom
                    sx={{ fontWeight: 600, fontSize: 18, marginBottom: 2 }}
                  >
                    {skill.category}
                  </Typography>
                  {skill.items.map((item, idx) => (
                    <Box key={idx} className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Typography
                          variant="body1"
                          color="white"
                          sx={{ fontSize: 16, fontWeight: 500 }}
                        >
                          {item.name}
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={item.progress}
                        sx={{
                          marginTop: 1,
                          borderRadius: 10,
                          height: 8, // Taller progress bar
                          backgroundColor: "#4A4A4A", // Dark background for progress bar
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "rgb(16, 185, 129)", // New green color for progress
                            borderRadius: 10, // Rounded corners for progress bar
                            transition: "width 0.6s ease-in-out", // Smooth transition for the progress bar
                          },
                        }}
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
