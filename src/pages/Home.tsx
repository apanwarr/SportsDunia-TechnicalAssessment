import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
  TextField,
  Switch,
  FormControlLabel,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface Props {}

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  source: { name: string };
  author: string;
}

const Home = ({ }: Props) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

  // Fetch news articles from News API
  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/everything?domains=wsj.com&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles || []);
      setFilteredArticles(data.articles || []);
    } catch (error) {
      console.error("Failed to fetch news articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    // Filter articles based on title or author
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(term) ||
        (article.author && article.author.toLowerCase().includes(term))
    );
    setFilteredArticles(filtered);
  };

  // Toggle light and dark mode
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Create theme based on mode
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* Global Page Container */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          padding: "20px",
        }}
      >
        {/* Theme Toggle Button */}
        <Box mb={4} display="flex" justifyContent="flex-end">
          <FormControlLabel
            control={<Switch checked={isDarkMode} onChange={handleThemeToggle} />}
            label="Dark Mode"
          />
        </Box>

        {/* Search Bar */}
        <Box mb={4} textAlign="center">
          <TextField
            label="Search Articles"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by title or author"
          />
        </Box>

        {/* Loading Indicator */}
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {/* Display Articles */}
            {filteredArticles.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: "100%" }}>
                  {/* Article Image */}
                  <CardMedia
                    component="img"
                    height="140"
                    image={article.urlToImage || "https://via.placeholder.com/400"}
                    alt={article.title}
                  />
                  {/* Article Content */}
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      {article.description?.substring(0, 100) || "No description available..."}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" display="block" gutterBottom>
                      Author: {article.author || "Unknown"}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" display="block" gutterBottom>
                      Source: {article.source.name}
                    </Typography>
                    {/* Read More Button */}
                    <Button
                      variant="outlined"
                      color="primary"
                      href={article.url}
                      target="_blank"
                      sx={{ mt: 2 }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Home;
