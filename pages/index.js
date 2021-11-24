import AboutSection from "../components/about-section/aboutSection"
import BlogSection from "../components/blog-Section/blogSection"
import LandingSection from "../components/landing-section/landingSection"
import ProjectsSection from "../components/projects-section/projectsSection"
export default function Home() {
  return (
    <div>
      <LandingSection></LandingSection>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <BlogSection></BlogSection>
    </div>
  )
}
