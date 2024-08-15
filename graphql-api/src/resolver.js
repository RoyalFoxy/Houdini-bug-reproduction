const resolvers = {
	Query: {
		order: (_, variables) => {
			return new Array(variables.amount).fill({
				id: '1',
				createdAt: new Date(),
				updatedAt: new Date(),
				type: 'Regular',
				orderPlacedAt: new Date(),
				code: 'Some code',
				state: 'Some state',
				active: true,
				customer: {
					id: '1',
					createdAt: new Date(),
					updatedAt: new Date(),
					title: 'Mr.',
					firstName: 'John',
					lastName: 'Doe',
					phoneNumber: '1234 5678 910',
					emailAddress: 'john.doe@gmail.com',
					addresses: [
						{
							id: '1',
							createdAt: new Date(),
							updatedAt: new Date(),
							fullName: 'John Doe',
							company: 'John Doe Inc.',
							streetLine1: 'Second Street',
							streetLine2: 'Third Street',
							city: 'Washington',
							province: 'Province 1 :)',
							postalCode: '12345',
							country: {
								id: '1',
								createdAt: new Date(),
								updatedAt: new Date(),
								languageCode: 'en_US',
								code: 'US',
								type: 'Country?',
								name: 'USA',
								enabled: true
							},
							phoneNumber: '1234 5678 910',
							defaultShippingAddress: true,
							defaultBillingAddress: false
						},
						{
							id: '2',
							createdAt: new Date(),
							updatedAt: new Date(),
							fullName: 'John Doe',
							company: 'John Doe Corp',
							streetLine1: 'Fourth Street',
							streetLine2: 'Fifth Street',
							city: 'New York',
							province: 'Province 2 :)',
							postalCode: '67890',
							country: {
								id: '1',
								createdAt: new Date(),
								updatedAt: new Date(),
								languageCode: 'en_US',
								code: 'US',
								type: 'Country?',
								name: 'USA',
								enabled: true
							},
							phoneNumber: '1234 5678 910',
							defaultShippingAddress: false,
							defaultBillingAddress: true
						}
					],
					user: {
						id: '1',
						createdAt: new Date(),
						updatedAt: new Date(),
						identifier: 'The first user!',
						verified: true,
						lastLogin: new Date()
					}
				},
				shippingAddress: {
					fullName: 'John Doe',
					company: 'John Doe Inc.',
					streetLine1: 'Second Street',
					streetLine2: 'Third Street',
					city: 'Washington',
					province: 'Province 1 :)',
					postalCode: '12345',
					country: 'USA',
					countryCode: 'US',
					phoneNumber: '1234 5678 910'
				},
				billingAddress: {
					fullName: 'John Doe',
					company: 'John Doe Corp',
					streetLine1: 'Fourth Street',
					streetLine2: 'Fifth Street',
					city: 'New York',
					province: 'Province 2 :)',
					postalCode: '67890',
					country: 'USA',
					countryCode: 'US',
					phoneNumber: '1234 5678 910'
				},
				lines: [
					{
						id: '1',
						createdAt: new Date(),
						updatedAt: new Date(),
						productVariant: {
							id: '1',
							productId: '1',
							createdAt: new Date(),
							updatedAt: new Date(),
							languageCode: 'en_US',
							sku: '1',
							name: 'MacBook 14"',
							price: 2000,
							stockLevel: 'High'
						},
						unitPrice: 2000,
						quantity: 5,
						linePrice: 10000,
						orderId: '1'
					},
					{
						id: '2',
						createdAt: new Date(),
						updatedAt: new Date(),
						productVariant: {
							id: '2',
							productId: '1',
							createdAt: new Date(),
							updatedAt: new Date(),
							languageCode: 'en_US',
							sku: '1',
							name: 'MacBook 16"',
							price: 3000,
							stockLevel: 'High'
						},
						unitPrice: 3000,
						quantity: 3,
						linePrice: 9000,
						orderId: '1'
					},
					{
						id: '3',
						createdAt: new Date(),
						updatedAt: new Date(),
						productVariant: {
							id: '3',
							productId: '1',
							createdAt: new Date(),
							updatedAt: new Date(),
							languageCode: 'en_US',
							sku: '1',
							name: 'MacBook 13"',
							price: 1700,
							stockLevel: 'High'
						},
						unitPrice: 1700,
						quantity: 8,
						linePrice: 13600,
						orderId: '1'
					}
				],
				totalQuantity: 16,
				shipping: 200,
				total: 32800
			});
		}
	}
};

export default resolvers