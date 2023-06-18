import React from 'react'
import { Tabs, TabList, Tab, Spacer, Button, Heading } from '@chakra-ui/react'

const Header = () => {
	return (
		<>
			<Heading m={10} size="md" fontSize="35px">
				Categories
			</Heading>
			<Tabs variant="soft-rounded" colorScheme="orange">
				<TabList gap={3} color={'orange'}>
					<Tab>All</Tab>
					<Tab>Custom</Tab>
					<Tab>ICP </Tab>
					<Tab>Mission</Tab>
					<Tab>Product</Tab>
					<Spacer />
					<Button m={2} colorScheme={'orange'}>
						Add Topic
					</Button>
				</TabList>
			</Tabs>
		</>
	)
}

export default Header
