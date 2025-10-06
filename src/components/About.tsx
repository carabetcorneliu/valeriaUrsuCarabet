import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Shield, Scale, Users, BookOpen } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Unwavering commitment to ethical practices and transparency in all legal proceedings."
    },
    {
      icon: Scale,
      title: "Justice",
      description: "Dedicated to ensuring fair and equitable outcomes through meticulous legal analysis."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with organizations to create sustainable compliance frameworks."
    },
    {
      icon: BookOpen,
      title: "Excellence",
      description: "Continuous learning and adaptation to evolving legal landscapes and regulatory requirements."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-medium">About Me</h2>
              <div className="h-1 w-16 bg-primary rounded"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                As a Senior Legal Analyst with a specialized focus on anti-corruption law, I bring 
                a unique blend of legal expertise, analytical rigor, and practical experience to 
                complex regulatory challenges.
              </p>
              
              <p>
                My career has been dedicated to helping organizations navigate the intricate landscape 
                of compliance requirements, from multinational corporations to non-profit organizations. 
                I believe that effective anti-corruption strategies require not just legal knowledge, 
                but also a deep understanding of organizational culture and operational realities.
              </p>

              <p>
                With advanced degrees in Law and Public Policy, and certifications in compliance 
                and risk management, I provide comprehensive solutions that protect organizations 
                while promoting ethical business practices.
              </p>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1633158108216-f10cd3202d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBib29rcyUyMGxlZ2FsJTIwbGlicmFyeXxlbnwxfHx8fDE3NTk3MjcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Legal library and research"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-medium mb-4">Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide my approach to legal analysis and client relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-medium mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}