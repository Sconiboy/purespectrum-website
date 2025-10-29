import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Shield, Beaker, Building2, Scale, Quote } from "lucide-react";
import { Link } from "wouter";
import Disclaimer from "@/components/Disclaimer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b-2 border-primary/20 bg-gradient-to-r from-white via-amber-50/30 to-white backdrop-blur-lg sticky top-0 z-50 shadow-lg">
        <div className="container py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-700 to-secondary bg-clip-text text-transparent tracking-tight">
                Be Bliss
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#benefits" className="text-base font-semibold text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer">
                Benefits
              </a>
              <a href="#crisis" className="text-base font-semibold text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer">
                The 7-OH Crisis
              </a>
              <a href="#science" className="text-base font-semibold text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer">
                Science
              </a>
              <a href="#wholesale" className="text-base font-semibold text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer">
                Wholesale
              </a>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary to-purple-700 hover:from-primary/90 hover:to-purple-700/90 shadow-lg px-6">Request Pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-sm font-semibold shadow-lg border-2 border-white/50">
                ✨ Legal in All 50 States ✨
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-purple-700 to-secondary bg-clip-text text-transparent leading-tight">
                The Legal Alternative to 7-Hydroxymitragynine
              </h1>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 mb-8 sm:mb-10 pl-6 font-light leading-relaxed">
                  Pharmaceutical-grade alkaloid blend formulated to provide a similar experience to 7-OH—without kratom alkaloids, legal risks, or regulatory concerns. Users report comparable benefits with a cleaner, more joyful profile.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-700 hover:from-primary/90 hover:to-purple-700/90 shadow-xl text-lg px-8 py-6">
                    Request Wholesale Pricing
                  </Button>
                </Link>
                <a href="#science">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg text-lg px-8 py-6">
                    Learn the Science
                  </Button>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-base text-gray-700">
                <div className="flex items-center gap-3 bg-white/70 backdrop-blur px-4 py-3 rounded-full shadow-md">
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
                  <span className="font-semibold">FDA-Approved Alkaloids</span>
                </div>
                <div className="flex items-center gap-3 bg-white/70 backdrop-blur px-4 py-3 rounded-full shadow-md">
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
                  <span className="font-semibold">Made in USA</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                <img 
                  src="/bebliss-promo.jpg" 
                  alt="Be Bliss - Experience Pure Bliss" 
                  className="relative max-w-lg w-full drop-shadow-2xl rounded-2xl border-4 border-white/50 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-white via-amber-50/20 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-purple-700 to-secondary bg-clip-text text-transparent">
                Why Be Bliss?
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
            </div>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              Users report similar benefits with a cleaner experience and zero legal risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-amber-50/30">
              <CardHeader>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="h-12 w-12 text-secondary" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-purple-700 bg-clip-text text-transparent">100% Legal Nationwide</CardTitle>
                <CardDescription>
                  Contains zero kratom alkaloids or controlled substances. Legal in all 50 states, including kratom-banned markets like Rhode Island, Vermont, Indiana, Wisconsin, Arkansas, and Alabama.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-rose-50/30">
              <CardHeader>
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-12 w-12 text-secondary" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Cleaner User Experience</CardTitle>
                <CardDescription>
                  Users report similar receptor activation to 7-OH, but without nausea, itching, or anxiety. Many describe feelings of joy and happiness without the benzo-receptor interaction that causes withdrawal concerns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-purple-300/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="bg-gradient-to-br from-purple-100 to-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-4">
                  <Beaker className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-700 to-primary bg-clip-text text-transparent">Pharmaceutical Standards</CardTitle>
                <CardDescription>
                  Formulated by a renowned chemist with over 20 years in the pharmaceutical industry. Every alkaloid is FDA-approved for use in dietary supplements.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Testimonial 1 */}
          <div className="max-w-3xl mx-auto mb-16">
            <Card className="bg-blue-50 border-primary/20">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg italic text-gray-700 mb-4">
                  "Switched our entire inventory from 7-OH to Be Bliss after the state ban. Customers love it—same effects they want, none of the side effects they complained about. Sales are actually up."
                </p>
                <p className="font-semibold text-primary">— Smoke Shop Owner, Indianapolis</p>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">Be Bliss</th>
                  <th className="p-4 text-left">7-Hydroxymitragynine</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Legal Status</td>
                  <td className="p-4 text-secondary font-semibold">✓ Legal in all 50 states</td>
                  <td className="p-4 text-red-600">✗ Banned in 6+ states, DEA scrutiny</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">μ-Opioid Receptor (MOR) Activation</td>
                  <td className="p-4 text-secondary font-semibold">✓ Users report similar activation</td>
                  <td className="p-4 text-secondary font-semibold">✓ Strong MOR agonist</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">GABA-A (Benzodiazepine) Receptor</td>
                  <td className="p-4 text-secondary font-semibold">✓ No interaction (no anxiety/withdrawal)</td>
                  <td className="p-4 text-red-600">✗ Interacts with GABA-A receptors (causes anxiety, dangerous withdrawal)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Nausea & Itching</td>
                  <td className="p-4 text-secondary font-semibold">✓ Users report minimal to none</td>
                  <td className="p-4 text-red-600">✗ Common side effects from mitragynine</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">User-Reported Mood</td>
                  <td className="p-4 text-secondary font-semibold">✓ Joy, happiness, positive affect</td>
                  <td className="p-4 text-gray-600">Variable, often with anxiety</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Manufacturing</td>
                  <td className="p-4 text-secondary font-semibold">✓ Exclusively US pharmaceutical lab</td>
                  <td className="p-4 text-red-600">✗ US, Asia, India - inconsistent quality control, unregulated facilities</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Alkaloid Source</td>
                  <td className="p-4 text-secondary font-semibold">✓ Multiple botanical sources (FDA-approved for supplements)</td>
                  <td className="p-4 text-red-600">✗ Single source: Kratom (Mitragyna speciosa) - DEA scrutiny, state bans</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonial 2 */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white border-secondary/20">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-secondary mb-4" />
                <p className="text-lg italic text-gray-700 mb-4">
                  "I was skeptical at first, but Be Bliss delivers. Same relaxation and mood lift I got from 7-OH, but I don't get that anxious feeling anymore. And no more itching—that alone is worth it."
                </p>
                <p className="font-semibold text-primary">— Verified Wholesale Customer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Crisis Section */}
      <section id="crisis" className="py-20 bg-red-50">
        <div className="container">
          <div className="text-center mb-12">
            <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-red-900">The 7-Hydroxymitragynine Crisis</h2>
            <p className="text-xl text-red-800 max-w-3xl mx-auto">
              Regulatory crackdown, wrongful death lawsuits, and dangerous synthetics are destroying the 7-OH market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-900">Federal & State Bans Accelerating</CardTitle>
                <CardDescription className="text-red-700">
                  <strong>RFK Jr. and the Trump administration have made 7-OH a priority target.</strong> In January 2025, Health Secretary Robert F. Kennedy Jr. announced plans to classify 7-hydroxymitragynine as a Schedule I controlled substance, citing "unacceptable overdose risks" and "lack of legitimate medical use."
                </CardDescription>
              </CardHeader>
              <CardContent className="text-red-700">
                <p className="mb-4">
                  <strong>Already banned in:</strong> Rhode Island, Vermont, Indiana, Wisconsin, Arkansas, Alabama, and more states pending legislation.
                </p>
                <p>
                  The DEA has identified 7-OH as a "drug of concern" and is actively investigating manufacturers and distributors. Federal scheduling could happen within months.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-900">Wrongful Death Lawsuits & Liability</CardTitle>
                <CardDescription className="text-red-700">
                  <strong>Thousands of deaths have been linked to 7-hydroxymitragynine products.</strong> In 2024, a Florida jury awarded <strong>$11 million</strong> in a wrongful death case against a kratom vendor whose product contained high levels of 7-OH.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-red-700">
                <p className="mb-4">
                  Plaintiffs' attorneys are targeting retailers, distributors, and manufacturers. Even if you didn't produce the product, selling 7-OH exposes you to massive liability.
                </p>
                <p>
                  <strong>Insurance companies are dropping coverage</strong> for businesses that carry 7-OH products, leaving vendors financially exposed.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-200 mb-12">
            <CardHeader>
              <CardTitle className="text-red-900">Dual Withdrawal Danger: Opioid + Benzodiazepine</CardTitle>
              <CardDescription className="text-red-700">
                7-OH creates a uniquely dangerous withdrawal profile that Be Bliss avoids entirely.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-red-700">
              <p className="mb-4">
                <strong>7-Hydroxymitragynine interacts with both μ-opioid receptors AND GABA-A (benzodiazepine) receptors.</strong> This means users face withdrawal from two different receptor systems simultaneously.
              </p>
              <p className="mb-4">
                <strong>Opioid withdrawal</strong> from 7-OH is extremely uncomfortable—nausea, anxiety, muscle pain, insomnia, and intense cravings.
              </p>
              <p className="mb-4">
                <strong>Benzodiazepine withdrawal is potentially lethal.</strong> GABA-A receptor withdrawal can cause seizures, delirium tremens, cardiovascular complications, and death. Medical supervision is often required to safely discontinue benzodiazepines.
              </p>
              <p>
                <strong>Be Bliss does not interact with GABA-A receptors,</strong> eliminating the risk of dangerous benzodiazepine-type withdrawal. Users report they can discontinue use without the severe withdrawal symptoms associated with 7-OH.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 mb-12">
            <CardHeader>
              <CardTitle className="text-red-900">Dangerous Synthetics Flooding the Market</CardTitle>
              <CardDescription className="text-red-700">
                As regulatory pressure increases, unscrupulous manufacturers are turning to even more dangerous alternatives.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-red-700">
              <p className="mb-4">
                <strong>MGM-15, 3M, and other synthetic opioids</strong> are being sold as "7-OH alternatives." These compounds are completely unregulated, untested, and potentially lethal.
              </p>
              <p className="mb-4">
                <strong>Undetectable 7-OH:</strong> Some products contain modified 7-hydroxymitragynine that doesn't show up on standard tests—but is still illegal and dangerous.
              </p>
              <p>
                <strong>Overseas manufacturing:</strong> Many 7-OH products are made in unregulated Asian labs with zero quality control. Contamination, mislabeling, and dangerous additives are common.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-red-900">Your Business Needs a Legal Alternative—Now</h3>
            <p className="text-lg text-red-800 mb-6 max-w-2xl mx-auto">
              Shops carrying 7-OH are going out of business. Be Bliss gives you a compliant, profitable solution that protects your business and serves your customers.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Switch to Be Bliss Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial 3 */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-blue-50 border-primary/20">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg italic text-gray-700 mb-4">
                  "We were terrified when our state banned 7-OH. Be Bliss saved our business. Our customers can't tell the difference—actually, they prefer it because there's no nausea. We're selling more now than we ever did with 7-OH."
                </p>
                <p className="font-semibold text-primary">— Distributor, Wisconsin</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Beaker className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-primary">The Science Behind Be Bliss</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pharmaceutical-grade formulation designed for a cleaner, safer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Be Bliss is a proprietary blend of alkaloids from non-kratom botanical sources. Users report that it activates similar opioid receptors as 7-hydroxymitragynine, providing comparable effects.
                </p>
                <p>
                  <strong>The critical difference:</strong> Be Bliss does not interact with benzodiazepine receptors. This means users report no anxiety, no dangerous withdrawal symptoms, and a more positive mood profile.
                </p>
                <p>
                  Additionally, because Be Bliss contains no mitragynine or 7-hydroxymitragynine, users report significantly less nausea and itching—two of the most common complaints about kratom-derived products.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manufacturing Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Be Bliss is formulated by a renowned chemist with over 20 years of experience in the pharmaceutical industry. Our lab operates under strict quality control standards.
                </p>
                <p>
                  <strong>Every alkaloid in Be Bliss is FDA-approved for use in dietary supplements.</strong> We use only US-sourced ingredients and manufacture exclusively in the United States.
                </p>
                <p>
                  Unlike fly-by-night 7-OH manufacturers operating in basement labs or overseas facilities, Be Bliss is produced in a professional pharmaceutical environment with rigorous testing and quality assurance.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <img 
              src="/bebliss-packaging.jpg" 
              alt="Be Bliss Packaging" 
              className="max-w-2xl mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section id="wholesale" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Building2 className="h-16 w-16 text-secondary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-primary">Wholesale & White Label Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to offer Be Bliss under your own brand or stock our proven formula.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>For Retailers</CardTitle>
                <CardDescription>
                  Stock Be Bliss in your smoke shop, vape store, or wellness boutique. Competitive wholesale pricing with volume discounts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>For Distributors</CardTitle>
                <CardDescription>
                  Become a regional distributor and serve multiple retail locations. Exclusive territory options available.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>White Label Services</CardTitle>
                <CardDescription>
                  Launch Be Bliss under your own brand name. Custom packaging, labeling, and formulation options available.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-blue-50 border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Why Partner with Be Bliss?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Demand is Exploding</p>
                  <p className="text-gray-700">As 7-OH bans spread, retailers are desperately seeking legal alternatives. Our waitlist is growing daily.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Expand into New Markets</p>
                  <p className="text-gray-700">Be Bliss is legal in kratom-banned states like Rhode Island, Vermont, Indiana, Wisconsin, Arkansas, and Alabama. Tap into markets your competitors can't reach.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Protect Your Business</p>
                  <p className="text-gray-700">Zero legal risk, no liability exposure, and no regulatory uncertainty. Sleep easy knowing you're selling a compliant product.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Customer Satisfaction</p>
                  <p className="text-gray-700">Users report they prefer Be Bliss over 7-OH due to the cleaner experience and lack of side effects. Happy customers = repeat business.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <img 
              src="/bebliss-box.jpg" 
              alt="Be Bliss Product Box" 
              className="max-w-2xl mx-auto rounded-lg shadow-xl mb-8"
            />
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Get Started?</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us today for wholesale pricing, minimum order quantities, and white label options.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Request Wholesale Information
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Testimonial */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white border-secondary/20">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-secondary mb-4" />
                <p className="text-lg italic text-gray-700 mb-4">
                  "Be Bliss is the future. Clean, legal, and customers love it. We're phasing out all our 7-OH inventory and going all-in on Be Bliss. Best business decision we've made in years."
                </p>
                <p className="font-semibold text-primary">— Regional Distributor, Southeast US</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Be Bliss</h3>
              <p className="text-blue-100">
                The legal, pharmaceutical-grade alternative to 7-hydroxymitragynine.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#benefits" className="block text-blue-100 hover:text-white transition-colors cursor-pointer">
                  Benefits
                </a>
                <a href="#crisis" className="block text-blue-100 hover:text-white transition-colors cursor-pointer">
                  The 7-OH Crisis
                </a>
                <a href="#science" className="block text-blue-100 hover:text-white transition-colors cursor-pointer">
                  Science
                </a>
                <a href="#wholesale" className="block text-blue-100 hover:text-white transition-colors cursor-pointer">
                  Wholesale
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <Link href="/contact">
                <Button variant="outline" className="text-primary bg-white hover:bg-blue-50">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-blue-400 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2025 Be Bliss. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Disclaimer />
    </div>
  );
}

