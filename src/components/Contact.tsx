import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  FileText,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "v@.com",
      href: "mailto:v.@.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/valeria",
      href: "https://linkedin.com/in/valeria",
    },
  ];

  const services = [
    "Compliance Assessment & Risk Analysis",
    "Anti-Corruption Program Development",
    "Legal Research & Case Analysis",
    "Ethics Training & Workshop Facilitation",
    "International Regulatory Compliance",
    "Due Diligence Investigations",
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-4">Get in Touch</h2>
          <div className="h-1 w-16 bg-primary rounded mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your compliance needs? I'm here to help you
            navigate complex legal challenges and build robust anti-corruption
            frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-medium mb-4">Send a Message</h3>
              <p className="text-gray-600">
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-medium mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-600">
                  Thank you for reaching out. I'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">First Name *</label>
                    <Input required placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Last Name *</label>
                    <Input required placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Email Address *</label>
                  <Input
                    type="email"
                    required
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Company/Organization
                  </label>
                  <Input placeholder="Your Organization" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Subject *</label>
                  <Input
                    required
                    placeholder="Compliance consultation inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Message *</label>
                  <Textarea
                    required
                    rows={6}
                    placeholder="Please describe your compliance needs and how I can assist you..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-medium">Availability</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <Badge variant="secondary">Within 24 hours</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Emergency Consultations</span>
                  <span>Available by appointment</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-medium">Services Offered</h3>
              </div>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
