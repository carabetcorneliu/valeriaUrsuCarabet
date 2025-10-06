import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Building2, Award } from 'lucide-react';

export function Experience() {
  const positions = [
    {
      title: "Senior Legal Analyst - Anti-Corruption",
      company: "Global Compliance Solutions LLC",
      location: "New York, NY",
      period: "2019 - Present",
      description: "Lead anti-corruption initiatives for Fortune 500 clients, managing complex compliance assessments and developing comprehensive risk mitigation strategies.",
      achievements: [
        "Designed compliance frameworks for 15+ multinational corporations",
        "Reduced client regulatory risk exposure by an average of 60%",
        "Led cross-functional teams of 8-12 professionals",
        "Established best practices adopted company-wide"
      ]
    },
    {
      title: "Compliance Manager",
      company: "International Development Bank",
      location: "Washington, DC",
      period: "2015 - 2019",
      description: "Managed compliance operations for international development projects, ensuring adherence to anti-corruption standards across multiple jurisdictions.",
      achievements: [
        "Oversaw $2.8B in development project compliance",
        "Implemented automated monitoring systems",
        "Trained 200+ staff members on compliance protocols",
        "Achieved 98% audit success rate over 4 years"
      ]
    },
    {
      title: "Legal Research Associate",
      company: "Morrison & Associates Law Firm",
      location: "Boston, MA",
      period: "2012 - 2015",
      description: "Conducted comprehensive legal research on white-collar crime and regulatory compliance matters, supporting senior partners in high-profile cases.",
      achievements: [
        "Contributed to 25+ successful case outcomes",
        "Developed legal research methodologies",
        "Published 3 articles in legal journals",
        "Mentored junior associates and interns"
      ]
    },
    {
      title: "Junior Analyst",
      company: "Federal Trade Commission",
      location: "Washington, DC",
      period: "2010 - 2012",
      description: "Entry-level position analyzing consumer protection cases and supporting enforcement actions against fraudulent business practices.",
      achievements: [
        "Analyzed 150+ consumer complaint cases",
        "Supported major enforcement actions",
        "Received Outstanding Performance Award",
        "Completed advanced training programs"
      ]
    }
  ];

  const recognition = [
    {
      award: "Legal Excellence Award",
      organization: "International Anti-Corruption Academy",
      year: "2023"
    },
    {
      award: "Compliance Professional of the Year",
      organization: "National Association of Compliance Professionals",
      year: "2022"
    },
    {
      award: "Outstanding Achievement in Legal Research",
      organization: "American Bar Association",
      year: "2021"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-4">Professional Experience</h2>
          <div className="h-1 w-16 bg-primary rounded mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A progressive career spanning over 15 years in legal analysis, 
            compliance management, and anti-corruption initiatives
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-20">
          {positions.map((position, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">{position.title}</h3>
                  <div className="flex items-center text-gray-600 space-x-4">
                    <div className="flex items-center">
                      <Building2 className="h-4 w-4 mr-2" />
                      <span>{position.company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{position.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-2 lg:mt-0">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <Badge variant="outline" className="whitespace-nowrap">
                    {position.period}
                  </Badge>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {position.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Key Achievements:</h4>
                <ul className="space-y-2">
                  {position.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Recognition & Awards */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Recognition & Awards</h3>
              <div className="h-1 w-16 bg-primary rounded"></div>
            </div>

            <div className="space-y-6">
              {recognition.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{item.award}</h4>
                      <p className="text-gray-600 text-sm">{item.organization}</p>
                      <Badge variant="secondary" className="mt-2">
                        {item.year}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5NzEzMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional workspace"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}