import { gql } from '@elysiajs/apollo';

const SCHEMA = gql`
	type Query {
		order(amount: Int!): [Order!]!
	}

	type Order {
		id: ID!
		createdAt: DateTime!
		updatedAt: DateTime!
		type: OrderType!
		orderPlacedAt: DateTime
		code: String!
		state: String!
		active: Boolean!
		customer: Customer
		shippingAddress: OrderAddress
		billingAddress: OrderAddress
		lines: [OrderLine!]!
		totalQuantity: Int!
		shipping: Money!
		total: Money!
	}

	enum OrderType {
		Regular
		Seller
		Aggregate
	}

	type Customer {
		id: ID!
		createdAt: DateTime!
		updatedAt: DateTime!
		title: String
		firstName: String!
		lastName: String!
		phoneNumber: String
		emailAddress: String!
		addresses: [Address!]
		user: User
	}

	type User {
		id: ID!
		createdAt: DateTime!
		updatedAt: DateTime!
		identifier: String!
		verified: Boolean!
		lastLogin: DateTime
	}

	type Address {
		id: ID!
		createdAt: DateTime!
		updatedAt: DateTime!
		fullName: String
		company: String
		streetLine1: String!
		streetLine2: String
		city: String
		province: String
		postalCode: String
		country: Country!
		phoneNumber: String
		defaultShippingAddress: Boolean
		defaultBillingAddress: Boolean
	}

	type Country {
		id: ID!
		createdAt: DateTime!
		updatedAt: DateTime!
		languageCode: LanguageCode!
		code: String!
		type: String!
		name: String!
		enabled: Boolean!
	}

	enum LanguageCode {
		en
		en_US
		de_CH
	}

	type OrderAddress {
		fullName: String
		company: String
		streetLine1: String
		streetLine2: String
		city: String
		province: String
		postalCode: String
		country: String
		countryCode: String
		phoneNumber: String
	}

	type OrderLine {
		id: ID!
		createdAt: DateTime!
		updatedAt: DateTime!
		productVariant: ProductVariant!
		unitPrice: Money!
		quantity: Int!
		linePrice: Money!
		orderId: ID!
	}

	type ProductVariant {
		id: ID!
		productId: ID!
		createdAt: DateTime!
		updatedAt: DateTime!
		languageCode: LanguageCode!
		sku: String!
		name: String!
		price: Money!
		stockLevel: String!
	}

	scalar DateTime
	scalar Money
`;

export default SCHEMA;
