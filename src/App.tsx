import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Code2, Cpu, Globe, Terminal, ChevronRight, Send, Download, ExternalLink, Server, ShieldCheck, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast, Toaster } from "sonner";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/40" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Terminal className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">IT.PRO</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" className="bg-primary hover:bg-primary/90">Hire Me</Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-foreground"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border/40 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium hover:bg-muted rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 pt-4">
                <Button className="w-full bg-primary py-6 text-lg">Hire Me</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 py-1.5 px-4 text-primary border-primary/30 bg-primary/5 backdrop-blur-sm animate-fade-in">
              Available for new projects
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
              Architecting <span className="text-primary italic">Digital</span> Resilience.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Senior IT Professional specializing in cloud infrastructure, cybersecurity systems, and enterprise-grade software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="px-8 h-14 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                View Portfolio <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 h-14 text-lg border-border/60 hover:bg-muted/50">
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-foreground">8+</span>
                <span className="text-xs uppercase tracking-widest font-semibold">Years Exp.</span>
              </div>
              <div className="w-px h-8 bg-border/60" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-foreground">120+</span>
                <span className="text-xs uppercase tracking-widest font-semibold">Projects</span>
              </div>
              <div className="w-px h-8 bg-border/60" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-foreground">50+</span>
                <span className="text-xs uppercase tracking-widest font-semibold">Clients</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:mr-0 max-w-[500px]"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border-2 border-border/40 shadow-2xl bg-muted">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1f7ea84c-52c4-4846-a8e7-0cd8749a3c55/profile-picture-5cfdadb2-1777229546606.webp" 
                alt="Professional Portrait of IT Specialist" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {/* Floating UI elements */}
            <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border/40 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Security Score</p>
                  <p className="text-sm font-bold">99.9% Robust</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-primary rounded-full" />
              Professional Background
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a solution-oriented IT professional with a deep-seated passion for architecting systems that are both scalable and secure. My expertise lies at the intersection of infrastructure engineering and modern software paradigms.
              </p>
              <p>
                Over the past decade, I've had the privilege of working with industry leaders and innovative startups, helping them navigate the complexities of digital transformation. I believe that technology should be an enabler of business growth, not a bottleneck.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="p-4 rounded-xl bg-background/50 border border-border/40">
                  <h4 className="font-bold text-foreground mb-1">Education</h4>
                  <p className="text-sm">B.Sc. in Computer Science<br />Stanford University</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-border/40">
                  <h4 className="font-bold text-foreground mb-1">Work History</h4>
                  <p className="text-sm">Senior Architect at CloudScale<br />5+ Years Remote Work</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="h-40 bg-primary/10 rounded-2xl flex items-center justify-center p-6 border border-primary/20">
                <Database className="h-10 w-10 text-primary" />
              </div>
              <div className="h-64 bg-blue-500/10 rounded-2xl flex items-center justify-center p-6 border border-blue-500/20">
                <Server className="h-12 w-12 text-blue-500" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-64 bg-indigo-500/10 rounded-2xl flex items-center justify-center p-6 border border-indigo-500/20">
                <ShieldCheck className="h-12 w-12 text-indigo-500" />
              </div>
              <div className="h-40 bg-cyan-500/10 rounded-2xl flex items-center justify-center p-6 border border-cyan-500/20">
                <Code2 className="h-10 w-10 text-cyan-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { 
      icon: Globe, 
      title: "Cloud Infrastructure", 
      desc: "Designing highly available multi-region deployments.",
      items: ["AWS Ecosystem", "Azure Cloud", "Google Cloud Platform", "Kubernetes Orchestration"] 
    },
    { 
      icon: Code2, 
      title: "Full-Stack Dev", 
      desc: "Building modern responsive web applications.",
      items: ["React 19 / Next.js", "TypeScript / Node.js", "Python / Go", "REST & GraphQL APIs"] 
    },
    { 
      icon: Cpu, 
      title: "DevOps & Automation", 
      desc: "Streamlining development lifecycles.",
      items: ["Terraform (IaC)", "GitHub Actions / GitLab CI", "Ansible & Docker", "Prometheus & Grafana"] 
    },
    { 
      icon: Terminal, 
      title: "Cybersecurity", 
      desc: "Securing digital assets from modern threats.",
      items: ["Security Auditing", "Penetration Testing", "IAM & Zero Trust", "SOC2 & GDPR Compliance"] 
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">Specializations</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Technical Mastery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A diverse toolkit built on the foundation of continuous innovation and hands-on experience in complex environments.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl mb-2">{skill.title}</CardTitle>
                  <CardDescription>{skill.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary" className="bg-muted/50 text-xs font-normal">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure",
      desc: "Architected a hybrid cloud environment for a Fortune 500 company, reducing operational costs by 35% while increasing uptime to 99.99%.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1f7ea84c-52c4-4846-a8e7-0cd8749a3c55/project-cloud-ed717bb7-1777229548079.webp",
      tags: ["Terraform", "AWS", "Kubernetes"],
      link: "#"
    },
    {
      title: "Real-time SIEM Dashboard",
      desc: "Developed a custom Security Information and Event Management (SIEM) tool for real-time threat detection and automated incident response.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1f7ea84c-52c4-4846-a8e7-0cd8749a3c55/project-cybersecurity-c6dbeae3-1777229547112.webp",
      tags: ["Next.js", "Python", "WebSockets"],
      link: "#"
    },
    {
      title: "FinTech Transaction Engine",
      desc: "Built a high-throughput transaction processing system capable of handling 50k+ requests per second with ACID compliance.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1f7ea84c-52c4-4846-a8e7-0cd8749a3c55/project-webapp-46846983-1777229546472.webp",
      tags: ["Go", "Redis", "PostgreSQL"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Case Studies</h2>
            <p className="text-muted-foreground text-lg">
              Showcasing technical solutions that solve real-world business challenges.
            </p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 group">
            View All Projects <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full overflow-hidden border border-border/40 shadow-xl bg-card">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                </div>
                <CardHeader className="space-y-4">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[10px] uppercase font-bold tracking-widest bg-primary/5 text-primary border-primary/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {project.desc}
                  </p>
                  <Button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold">
                    Explore Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Connection request received!", {
        description: "I'll review your message and reach out within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Badge className="mb-4">Get in touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's Build Something <span className="text-primary italic">Extraordinary</span>.</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Open for consulting, enterprise contracts, or technical leadership roles. 
              Let's discuss how we can elevate your infrastructure.
            </p>
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Official Email", value: "hello@itpro.com", href: "mailto:hello@itpro.com" },
                { icon: Linkedin, label: "Professional Profile", value: "linkedin.com/in/itpro", href: "#" },
                { icon: Github, label: "Code Repositories", value: "github.com/itpro-dev", href: "#" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-5 group hover:bg-muted/50 p-3 -m-3 rounded-2xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-card border border-border/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">{item.label}</p>
                    <p className="text-lg font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-10 border border-border/40 bg-card/80 backdrop-blur-md shadow-2xl relative">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Mail className="h-32 w-32" />
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold tracking-tight">Full Name</label>
                    <Input className="bg-background/50 border-border/60 h-12" placeholder="Alex Johnson" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold tracking-tight">Email Address</label>
                    <Input className="bg-background/50 border-border/60 h-12" type="email" placeholder="alex@company.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-tight">Subject</label>
                  <Input className="bg-background/50 border-border/60 h-12" placeholder="Cloud Infrastructure Consultation" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-tight">Message</label>
                  <Textarea className="bg-background/50 border-border/60 min-h-[160px] resize-none" placeholder="Tell me about your project needs..." required />
                </div>
                <Button type="submit" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/10 transition-all duration-300" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Submit Inquiry"}
                  {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Terminal className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight">IT.PRO</span>
            </div>
            <p className="text-muted-foreground text-lg max-w-sm mb-8 leading-relaxed">
              Empowering global organizations with secure, scalable, and resilient technical solutions since 2016.
            </p>
            <div className="flex space-x-5">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Consulting Agreement"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} IT Professional Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Operational Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}