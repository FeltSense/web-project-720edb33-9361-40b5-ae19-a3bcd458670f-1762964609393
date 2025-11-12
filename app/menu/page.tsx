'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function MenuPage() {
  const menuSections = [
    {
      title: "Appetizers",
      items: [
        {
          name: "Pan-Seared Scallops",
          description: "With cauliflower purée and crispy pancetta",
          price: "$24"
        },
        {
          name: "Tuna Tartare",
          description: "Sesame-crusted with avocado and citrus vinaigrette",
          price: "$22"
        },
        {
          name: "Foie Gras Terrine",
          description: "With brioche toast and fig compote",
          price: "$28"
        },
        {
          name: "Oysters Rockefeller",
          description: "Fresh Blue Point oysters with spinach and herbs",
          price: "$18"
        }
      ]
    },
    {
      title: "Main Courses",
      items: [
        {
          name: "Wagyu Beef Tenderloin",
          description: "8oz with truffle mashed potatoes and red wine reduction",
          price: "$65"
        },
        {
          name: "Lobster Thermidor",
          description: "Whole Maine lobster with cognac cream sauce",
          price: "$58"
        },
        {
          name: "Duck Confit",
          description: "With cherry gastrique and roasted root vegetables",
          price: "$42"
        },
        {
          name: "Chilean Sea Bass",
          description: "Miso-glazed with jasmine rice and bok choy",
          price: "$48"
        },
        {
          name: "Rack of Lamb",
          description: "Herb-crusted with ratatouille and rosemary jus",
          price: "$52"
        }
      ]
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Chocolate Soufflé",
          description: "Dark chocolate with vanilla bean ice cream",
          price: "$16"
        },
        {
          name: "Crème Brûlée",
          description: "Classic vanilla with seasonal berries",
          price: "$14"
        },
        {
          name: "Tarte Tatin",
          description: "Caramelized apple tart with Calvados ice cream",
          price: "$15"
        },
        {
          name: "Cheese Selection",
          description: "Artisanal cheeses with honeycomb and walnuts",
          price: "$18"
        }
      ]
    }
  ];

  const wineSelection = [
    {
      category: "Champagne & Sparkling",
      wines: [
        { name: "Dom Pérignon 2012", price: "$320" },
        { name: "Krug Grande Cuvée", price: "$280" },
        { name: "Billecart-Salmon Rosé", price: "$180" }
      ]
    },
    {
      category: "White Wines",
      wines: [
        { name: "Chablis Grand Cru Les Clos 2019", price: "$145" },
        { name: "Sancerre Henri Bourgeois 2021", price: "$85" },
        { name: "Chardonnay Kistler 2020", price: "$120" }
      ]
    },
    {
      category: "Red Wines",
      wines: [
        { name: "Château Margaux 2015", price: "$850" },
        { name: "Barolo Brunate 2018", price: "$180" },
        { name: "Pinot Noir Domaine de la Côte 2020", price: "$95" }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Discover our carefully crafted dishes featuring the finest seasonal ingredients 
              and exceptional culinary artistry
            </p>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Food Menu */}
        <div className="max-w-4xl mx-auto">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 border-b-2 border-teal-600 pb-4">
                {section.title}
              </h2>
              <div className="grid gap-8">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-6">
                        <span className="text-2xl font-bold text-teal-600">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Wine Selection */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 border-b-2 border-teal-600 pb-4">
            Wine Selection
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {wineSelection.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.wines.map((wine, wineIndex) => (
                    <div key={wineIndex} className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{wine.name}</span>
                      <span className="text-teal-600 font-bold">{wine.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-teal-50 p-12 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Reserve your table today and embark on an unforgettable culinary journey
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                href="/#contact" 
                className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Make Reservation
              </Link>
              <Link 
                href="/" 
                className="inline-block border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}