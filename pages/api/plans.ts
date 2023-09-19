import { IPlan } from "@/interface/plan"


interface Data {
  planes: IPlan[]
  companias: IPlan[]
}

export const data: Data = {
  planes: [
    {
      id: 1,
      name: 'Basic',
      description: 'Begin with a strong start',
      price: 4,
      benefits: [
        'Two software to choose',
        'Received an NFT to acceses more benefits'
      ]
    },
    {
      id: 2,
      name: 'Advanced',
      description: 'Boost Your Productivity with Essential Tools',
      price: 10,
      benefits: [
        'Four software to choose',
        'Received an NFT to acceses more benefits'
      ]
    },
    {
      id: 3,
      name: 'Expert',
      description: 'Empower Your Business with Versatile Solutions',
      price: 14,
      benefits: [
        'Eight software to choose',
        'Received an NFT to acceses more benefits'
      ]
    }
  ],
  companias: [
    {
      id: 4,
      name: 'StartUp',
      description: 'Unlock Growth with Advanced Software Solutions',
      price: 50,
      benefits: [
        'Project management tools',
        'Collaboration platform',
        'Market analysis tools',
        'Software for agile development'
      ]
    },
    {
      id: 5,
      name: 'Company',
      description: 'Enhance Efficiency with Comprehensive Software',
      price: 70,
      benefits: [
        'Project management tools',
        'Collaboration platform',
        'Market analysis tools',
        'Software for agile development'
      ]
    },
    {
      id: 6,
      name: 'Enterprise',
      description:
        'Get in contact to create to tailor the most suitable bundle for you',
      price: 'Contact Us',
      benefits: [
        'Talk to our professionals',
        'We analyze your project',
        'Find the most suitable tools',
        'Discover new ways to optimize work'
      ]
    }
  ]
}
