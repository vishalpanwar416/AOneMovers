export default function StructuredData() {
  const businessData = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'A One Movers',
    description: 'Professional moving services across Canada',
    url: 'https://www.aonemovers.ca',
    telephone: '+16475124570',
    email: 'info@aonemovers.ca',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9455 Mississauga Rd',
      addressLocality: 'Brampton',
      addressRegion: 'ON',
      postalCode: 'L6X 0Z8',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.7350',
      longitude: '-79.7690',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    serviceType: [
      'Residential Moving',
      'Commercial Moving',
      'Long Distance Moving',
      'Packing Services',
      'Storage Solutions',
      'Same-Day Moving',
    ],
    openingHours: [
      'Mo-Fr 08:00-20:00',
      'Sa 09:00-18:00',
      'Su 10:00-16:00',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
    },
    sameAs: [
      'https://www.facebook.com/aonemovers',
      'https://www.instagram.com/aonemovers',
      'https://www.linkedin.com/company/aonemovers',
    ],
  }

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'A One Movers',
    image: 'https://www.aonemovers.ca/logo.png',
    description: 'Professional moving company providing reliable moving services across Canada',
    '@id': 'https://www.aonemovers.ca',
    url: 'https://www.aonemovers.ca',
    telephone: '+16475124570',
    email: 'info@aonemovers.ca',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9455 Mississauga Rd',
      addressLocality: 'Brampton',
      addressRegion: 'Ontario',
      postalCode: 'L6X 0Z8',
      addressCountry: 'Canada',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Moving Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Moving',
            description: 'Complete home relocation services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Moving',
            description: 'Office and business relocations',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Long Distance Moving',
            description: 'Cross-province moving services',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  )
}
