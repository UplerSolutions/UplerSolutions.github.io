export interface HelpContent {
	title: string
	description: string
}

export interface GeneralInfo {
	ContactUpler: HelpContent
	ChatActivation: HelpContent
	// Agrega más secciones aquí si es necesario...
}

export interface Partners {
	WhyPartnerWithUpler: HelpContent
	HowToPartnerWithUpler: HelpContent
	ProductSubmissionTips: HelpContent
	// Agrega más secciones aquí si es necesario...
}

export interface Licenses {
	WhatIsALicense: HelpContent
	WhereIsMyLicense: HelpContent
	HowToActivateLicense: HelpContent
	HowToLoginWithLicense: HelpContent
	UpgradeDowngradeLicense: HelpContent
	ExplanationOfOffersAndProducts: HelpContent
	TermsAndFeatures: HelpContent
	ProductSupport: HelpContent
	Gifts: HelpContent
	CatalogPriceCalculation: HelpContent
	// Agrega más secciones aquí si es necesario...
}

export interface HelpData {
	GeneralInfo: GeneralInfo
	Partners: Partners
	Licenses: Licenses
	// Agrega más secciones aquí si es necesario...
}
type GeneralInfoKeys = keyof HelpData['GeneralInfo']
type PartnersKeys = keyof HelpData['Partners']
type LicensesKeys = keyof HelpData['Licenses']

type HelpDataKeys = GeneralInfoKeys | PartnersKeys | LicensesKeys

type HelpCategory = {
	GeneralInfo: Record<GeneralInfoKeys, HelpContent>
	Partners: Record<PartnersKeys, HelpContent>
	Licenses: Record<LicensesKeys, HelpContent>
}

export const help: HelpCategory = {
	GeneralInfo: {
		ContactUpler: {
			title: 'Contact Upler',
			description:
				"Take a look at our Help Center to learn all about your AppSumo account, how to partner with us to list your product, and our AppSumo Plus membership. Use the magnifying glass in the bottom right corner of the screen to navigate related articles and contact our support team if you can't find the answer you're looking for."
		},
		ChatActivation: {
			title: 'Chat Activation',
			description:
				"Forgot the seventh variation of the same password you've been using for years? Perhaps 'Password123' hasn't proven to be secure? Is it time to change the password you shared with someone you've had a falling out with? We've got your back. You can reset your AppSumo account password here and bookmark this link for easy access."
		}
	},
	Partners: {
		WhyPartnerWithUpler: {
			title: 'Why Partner with Upler?',
			description:
				'Upler is here to empower all entrepreneurs. Partnering with Upler gives you the opportunity to make money selling your software, gain new customers, advertise on our platform long-term, and receive valuable feedback from our users to improve your product.'
		},
		HowToPartnerWithUpler: {
			title: 'How to Partner with Upler?',
			description:
				'Selling with Upler is as easy as 1-2-3! Become a partner, submit your product, and keep an eye on your email inbox for status updates from our team that will help your offer go live and ready for sale.'
		},
		ProductSubmissionTips: {
			title: 'Product Submission Tips',
			description:
				'Here are some guidelines and best practices for creating an excellent submission that aligns perfectly with our audience and increases your chances of having your product accepted for launch in our community.'
		}
	},
	Licenses: {
		WhatIsALicense: {
			title: 'What Is a License?',
			description:
				"Licenses are our newly launched alternative to codes. Hurray! Licenses are super easy to redeem and allow you to connect to our partner's website immediately after activation (you're welcome). Unlike codes, licenses don't need to be stacked, which means you can upgrade or downgrade your tiered plan as you please."
		},
		WhereIsMyLicense: {
			title: 'Where Is My License in My Account?',
			description:
				"All products purchased in the Upler marketplace can be found on the 'Products' page of your Upler account. You can use the search bar under the 'Products' header in the top left corner of the page to quickly find your purchase."
		},
		HowToActivateLicense: {
			title: 'How to Activate My License?',
			description:
				"To activate your license and access your purchase, follow these steps: Go to the 'Products' page of your AppSumo account, use the 'Actions' dropdown next to your product to select 'Activate,' click the 'Activate Now' button, and follow the step-by-step instructions to complete the registration and activation process on the partner's site."
		},
		HowToLoginWithLicense: {
			title: 'How to Login with My License?',
			description:
				"Once your license has been activated and your account created, you can continue accessing the product directly through the partner's site using your activation email for login."
		},
		UpgradeDowngradeLicense: {
			title: 'Upgrade/Downgrade My License',
			description:
				"Why should you upgrade/downgrade your license? Because you can! After activating and testing your product's license, you can make changes to the variable features of your tier/plan by either upgrading or downgrading it."
		},
		ExplanationOfOffersAndProducts: {
			title: 'Explanation of Offers and Products',
			description:
				"What's a lifetime deal? What's stacking? Get to know the details about the offers and products available on our platform."
		},
		TermsAndFeatures: {
			title: 'Terms and Features',
			description:
				'Learn about the terms and features related to Upler purchases and how to navigate your Upler account.'
		},
		ProductSupport: {
			title: 'Product Support',
			description:
				'Facing issues with a purchased product? Learn how to get support and contact our partners directly from your Upler account.'
		},
		Gifts: {
			title: 'Gifts',
			description:
				"Understand what 'gifts' mean in our context and how you might come across them on our website."
		},
		CatalogPriceCalculation: {
			title: 'How Is Catalog Price Calculated?',
			description:
				"Curious about the struck-through prices? Understand how we calculate these prices to demonstrate the value you're getting with our offers."
		}
		// Agrega más secciones aquí si es necesario...
	}
}
