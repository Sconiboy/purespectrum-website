import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Shield, Beaker, Building2, Scale } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/images/purespectrum_logo.png" 
                alt="PureSpectrum" 
                className="h-12"
              />
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">
                Benefits
              </Link>
              <Link href="#crisis" className="text-sm font-medium hover:text-primary transition-colors">
                The 7-OH Crisis
              </Link>
              <Link href="#science" className="text-sm font-medium hover:text-primary transition-colors">
                Science
              </Link>
              <Link href="#wholesale" className="text-sm font-medium hover:text-primary transition-colors">
                Wholesale
              </Link>
              <Link href="/contact">
                <Button>Request Pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary text-white">Legal in All 50 States</Badge>
              <h1 className="text-5xl font-bold mb-6 text-primary">
                The Legal Alternative to 7-Hydroxymitragynine
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Pharmaceutical-grade, full-spectrum alkaloid blend that delivers the same receptor activation as 7-OH—without the legal risks, dangerous side effects, or regulatory concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Request Wholesale Pricing
                  </Button>
                </Link>
                <Link href="#science">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn the Science
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>FDA-Approved Alkaloids</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Made in USA</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/assets/images/purespectrum_bottle.png" 
                alt="PureSpectrum Bottle" 
                className="max-w-md w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Why PureSpectrum?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Same benefits. Better experience. Zero legal risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Legal Everywhere</CardTitle>
                <CardDescription>
                  Unlike 7-OH facing DEA scheduling and state bans, PureSpectrum is legal in all 50 states—including kratom-restricted markets.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Beaker className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Safer Profile</CardTitle>
                <CardDescription>
                  Acts on opioid receptors like 7-OH but avoids benzodiazepine receptors—eliminating anxiety and dangerous withdrawal.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Pharmaceutical Grade</CardTitle>
                <CardDescription>
                  Formulated by renowned pharmaceutical chemist. Made in certified US laboratory with full batch testing.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">PureSpectrum vs 7-Hydroxymitragynine</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-4">Feature</th>
                    <th className="text-center py-3 px-4 text-secondary font-bold">PureSpectrum</th>
                    <th className="text-center py-3 px-4 text-gray-600">7-OH</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 font-medium">Legal Status</td>
                    <td className="py-3 px-4 text-center text-secondary">
                      <CheckCircle2 className="inline h-5 w-5" /> All 50 States
                    </td>
                    <td className="py-3 px-4 text-center text-red-600">
                      <AlertTriangle className="inline h-5 w-5" /> DEA Scheduling Pending
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium">Opioid Receptor Activation</td>
                    <td className="py-3 px-4 text-center text-secondary">
                      <CheckCircle2 className="inline h-5 w-5" />
                    </td>
                    <td className="py-3 px-4 text-center text-secondary">
                      <CheckCircle2 className="inline h-5 w-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Benzo Receptor Interaction</td>
                    <td className="py-3 px-4 text-center text-secondary">
                      <CheckCircle2 className="inline h-5 w-5" /> No
                    </td>
                    <td className="py-3 px-4 text-center text-red-600">
                      <AlertTriangle className="inline h-5 w-5" /> Yes (Causes Anxiety)
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium">Nausea</td>
                    <td className="py-3 px-4 text-center text-secondary">
                      <CheckCircle2 className="inline h-5 w-5" /> No
                    </td>
                    <td className="py-3 px-4 text-center text-red-600">
                      <AlertTriangle className="inline h-5 w-5" /> Common
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Anxiety / Withdrawal Risk</td>
                    <td className="py-3 px-4 text-center text-secondary">
                      <CheckCircle2 className="inline h-5 w-5" /> No
                    </td>
                    <td className="py-3 px-4 text-center text-red-600">
                      <AlertTriangle className="inline h-5 w-5" /> Yes (Dangerous)
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium">User-Reported Joy/Happiness</td>
                    <td className="py-3 px-4 text-center text-secondary">
                      <CheckCircle2 className="inline h-5 w-5" /> Yes
                    </td>
                    <td className="py-3 px-4 text-center text-gray-400">
                      Limited
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">FDA-Approved Ingredients</td>
                    <td className="py-3 px-4 text-center text-secondary">
                      <CheckCircle2 className="inline h-5 w-5" /> Yes
                    </td>
                    <td className="py-3 px-4 text-center text-red-600">
                      <AlertTriangle className="inline h-5 w-5" /> Not Lawful
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium">Manufacturing</td>
                    <td className="py-3 px-4 text-center text-secondary">
                      US Pharmaceutical Lab
                    </td>
                    <td className="py-3 px-4 text-center text-red-600">
                      Basement Labs / Overseas
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* The 7-OH Crisis */}
      <section id="crisis" className="py-20 bg-red-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-600 text-white">Urgent Industry Alert</Badge>
              <h2 className="text-4xl font-bold mb-4 text-red-900">The 7-OH Crisis</h2>
              <p className="text-xl text-red-800">
                Federal crackdown intensifies. State bans expanding. Shops closing nationwide.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-900">FDA & DEA Crackdown (July 2025)</CardTitle>
                  <CardDescription>
                    FDA recommended scheduling 7-OH under the Controlled Substances Act. HHS Secretary Robert F. Kennedy Jr. stated: "We're taking action on 7-OH as a critical step in the fight against opioid addiction." FDA Commissioner Marty Makary warned: "7-OH is an opioid that can be more potent than morphine."
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-900">Expanding State Bans</CardTitle>
                  <CardDescription>
                    <strong>Complete Bans:</strong> Alabama, Arkansas, Indiana, Rhode Island, Vermont, Wisconsin, Louisiana<br/>
                    <strong>Schedule I Classification:</strong> Florida (August 2025)<br/>
                    <strong>Concentration Limits:</strong> Arizona, Oklahoma, Texas, Utah (&gt;2% banned)<br/>
                    <strong>Synthetic Bans:</strong> Mississippi, Colorado
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-900">Dangerous Synthetics Flooding Market</CardTitle>
                  <CardDescription>
                    As 7-OH faces bans, fly-by-night operators are releasing dangerous alternatives: MGM-15, 3M, and products containing undetectable modified 7-OH that's completely illegal. These products put retailers at severe legal risk.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Don't Let Your Business Become a Casualty</h3>
              <p className="text-lg text-gray-700 mb-6">
                PureSpectrum offers a legal, compliant solution that protects your business and serves your customers.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  Secure Your Supply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Science & Safety */}
      <section id="science" className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">The Science Behind PureSpectrum</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                    Same Receptor Activation
                  </h3>
                  <p className="text-gray-700 ml-8">
                    PureSpectrum acts on the same opioid receptors as 7-hydroxymitragynine, delivering the desired effects users seek.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                    Critical Difference: No Benzo Receptors
                  </h3>
                  <p className="text-gray-700 ml-8">
                    Unlike 7-OH, PureSpectrum does NOT interact with benzodiazepine receptors. This eliminates the anxiety, nausea, itching, and dangerous withdrawal potential associated with 7-OH.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                    Enhanced User Experience
                  </h3>
                  <p className="text-gray-700 ml-8">
                    User reports indicate enhanced feelings of joy and happiness—benefits not typically associated with 7-OH products.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                    Full-Spectrum Alkaloid Blend
                  </h3>
                  <p className="text-gray-700 ml-8">
                    Contains only alkaloid ingredients approved by FDA for use in dietary supplements. No kratom alkaloids. No synthetic compounds.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/assets/images/lab_scientist.png" 
                alt="Pharmaceutical Laboratory" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <Scale className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-3 text-primary">Formulated by Pharmaceutical Expert</h3>
                <p className="text-gray-700 text-lg">
                  PureSpectrum was developed by a renowned pharmaceutical chemist with extensive experience in oncology and medical cannabis research. Unlike basement labs or overseas manufacturers producing 7-OH products, our formulation is created in a certified US pharmaceutical laboratory with rigorous quality control and batch testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section id="wholesale" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Wholesale & White Label Solutions</h2>
            <p className="text-xl text-gray-700">
              Save your business from 7-OH bans. Expand into kratom-restricted states. Meet the growing demand with a legal, reliable solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Wholesale Distribution</CardTitle>
                <CardDescription>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Competitive wholesale pricing tiers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Reliable supply chain and inventory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Fast shipping and fulfillment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Marketing and sales support</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>White Label Services</CardTitle>
                <CardDescription>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Launch under your own brand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Custom packaging and labeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Flexible minimum order quantities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Full regulatory compliance support</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Badge className="mb-4 bg-red-600 text-white">High Demand - Waitlist Growing</Badge>
            <h3 className="text-2xl font-bold mb-4">Secure Your Allocation</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Demand is extremely high as retailers seek legal alternatives to 7-OH. Join our growing waitlist and be among the first to receive wholesale pricing and availability.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Request Wholesale Information
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="/assets/images/purespectrum_logo.png" 
                alt="PureSpectrum" 
                className="h-12 mb-4 brightness-0 invert"
              />
              <p className="text-blue-100">
                The legal, pharmaceutical-grade alternative to 7-hydroxymitragynine.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-100">
                <li><Link href="#benefits" className="hover:text-white transition-colors">Benefits</Link></li>
                <li><Link href="#crisis" className="hover:text-white transition-colors">The 7-OH Crisis</Link></li>
                <li><Link href="#science" className="hover:text-white transition-colors">Science & Safety</Link></li>
                <li><Link href="#wholesale" className="hover:text-white transition-colors">Wholesale</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <Link href="/contact">
                <Button variant="secondary" className="w-full">
                  Request Information
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-blue-400 pt-8 text-center text-blue-100 text-sm">
            <p>&copy; 2025 PureSpectrum. All rights reserved. Legal in all 50 states.</p>
            <p className="mt-2 text-xs">
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

