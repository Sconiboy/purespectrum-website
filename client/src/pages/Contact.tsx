import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Building2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    currentProducts: "",
    estimatedVolume: "",
    state: "",
    inquiryType: "wholesale" as "wholesale" | "white_label" | "general",
    message: "",
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We'll be in touch shortly.");
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        businessType: "",
        currentProducts: "",
        estimatedVolume: "",
        state: "",
        inquiryType: "wholesale",
        message: "",
      });
    },
    onError: (error) => {
      toast.error("Failed to submit form. Please try again.");
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img 
                src="/assets/images/purespectrum_logo.png" 
                alt="PureSpectrum" 
                className="h-12 cursor-pointer"
              />
            </Link>
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-primary">Get Started with PureSpectrum</h1>
            <p className="text-xl text-gray-600">
              Join the growing waitlist for wholesale and white label opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Building2 className="h-10 w-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Wholesale</CardTitle>
                <CardDescription>
                  Stock PureSpectrum in your retail locations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Mail className="h-10 w-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">White Label</CardTitle>
                <CardDescription>
                  Launch under your own brand name
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Phone className="h-10 w-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Distribution</CardTitle>
                <CardDescription>
                  Become a regional distributor
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Your Company LLC"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type</Label>
                    <Input
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      placeholder="e.g., Smoke Shop, Dispensary, Distributor"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State/Region</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="e.g., California, Texas"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value: "wholesale" | "white_label" | "general") =>
                      setFormData({ ...formData, inquiryType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wholesale">Wholesale Distribution</SelectItem>
                      <SelectItem value="white_label">White Label Services</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentProducts">Current Product Line</Label>
                  <Input
                      id="currentProducts"
                      value={formData.currentProducts}
                      onChange={(e) => setFormData({ ...formData, currentProducts: e.target.value })}
                      placeholder="e.g., Kratom, 7-OH, CBD, Delta-8"
                    />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estimatedVolume">Estimated Monthly Volume</Label>
                  <Select
                    value={formData.estimatedVolume}
                    onValueChange={(value) => setFormData({ ...formData, estimatedVolume: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select volume range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-100">0-100 units</SelectItem>
                      <SelectItem value="100-500">100-500 units</SelectItem>
                      <SelectItem value="500-1000">500-1,000 units</SelectItem>
                      <SelectItem value="1000-5000">1,000-5,000 units</SelectItem>
                      <SelectItem value="5000+">5,000+ units</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your business and what you're looking for..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? "Submitting..." : "Submit Inquiry"}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to be contacted regarding wholesale and white label opportunities.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">Why Partner with PureSpectrum?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Legal Everywhere</h4>
                <p className="text-sm text-gray-700">
                  Expand into all 50 states including kratom-banned markets
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">High Demand</h4>
                <p className="text-sm text-gray-700">
                  Customers seeking legal alternatives to 7-OH products
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Reliable Supply</h4>
                <p className="text-sm text-gray-700">
                  US pharmaceutical manufacturing with consistent inventory
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 mt-12">
        <div className="container text-center">
          <p className="text-blue-100">&copy; 2025 PureSpectrum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

