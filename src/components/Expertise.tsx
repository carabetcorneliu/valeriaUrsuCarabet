import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  FileCheck, 
  AlertTriangle, 
  Search, 
  Shield, 
  Users, 
  Globe, 
  BookOpen,
  TrendingUp 
} from 'lucide-react';

export function Expertise() {
  const specializations = [
    {
      icon: FileCheck,
      title: "Compliance Assessment",
      description: "Comprehensive evaluation of organizational compliance frameworks and identification of potential risk areas.",
      skills: ["Risk Assessment", "Policy Review", "Audit Preparation", "Regulatory Mapping"]
    },
    {
      icon: AlertTriangle,
      title: "Anti-Corruption Investigation",
      description: "Thorough investigation of corruption allegations with detailed analysis and remediation recommendations.",
      skills: ["Evidence Analysis", "Witness Interviews", "Due Diligence", "Case Documentation"]
    },
    {
      icon: Search,
      title: "Legal Research & Analysis",
      description: "In-depth research on complex legal matters with clear, actionable analysis and recommendations.",
      skills: ["Case Law Research", "Regulatory Analysis", "Legal Writing", "Precedent Review"]
    },
    {
      icon: Shield,
      title: "Ethics Program Development",
      description: "Design and implementation of comprehensive ethics programs tailored to organizational needs.",
      skills: ["Program Design", "Training Development", "Policy Creation", "Monitoring Systems"]
    },
    {
      icon: Users,
      title: "Stakeholder Training",
      description: "Educational programs for executives, employees, and board members on compliance and ethics.",
      skills: ["Executive Training", "Workshop Design", "Presentation Skills", "Knowledge Transfer"]
    },
    {
      icon: Globe,
      title: "International Compliance",
      description: "Navigation of complex international regulatory frameworks and cross-border compliance issues.",
      skills: ["FCPA Compliance", "International Law", "Cross-border Issues", "Multi-jurisdictional Analysis"]
    }
  ];

  const certifications = [
    "Certified Compliance & Ethics Professional (CCEP)",
    "Anti-Money Laundering Specialist (CAMS)",
    "International Association of Privacy Professionals (IAPP)",
    "Project Management Professional (PMP)",
    "Certified Fraud Examiner (CFE)"
  ];

  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-4">Areas of Expertise</h2>
          <div className="h-1 w-16 bg-primary rounded mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialized knowledge and proven experience across critical areas of anti-corruption 
            law and compliance management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {specializations.map((item, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium ml-4">{item.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications & Qualifications */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Professional Certifications</h3>
              <div className="h-1 w-16 bg-primary rounded"></div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary mr-3" />
                <h4 className="font-medium">Continuous Education</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Committed to staying current with evolving regulations, attending annual 
                conferences, and participating in professional development programs to 
                ensure the highest level of expertise.
              </p>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXN0aWNlJTIwc2NhbGVzJTIwbGVnYWwlMjBzeW1ib2x8ZW58MXx8fHwxNzU5NzI3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Justice and legal symbols"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}