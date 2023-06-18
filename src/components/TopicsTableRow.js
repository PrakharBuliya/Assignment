import { Tr, Td, Tag, HStack, Spacer, Button } from '@chakra-ui/react'

import React from 'react'

const TopicsTableRow = (props) => {
	return (
		<>
			<Tr>
				<Td>{props.desc}</Td>
			</Tr>
			<HStack ml={5} mr={10}>
				<Tag colorScheme={'yellow'}>Online Presence</Tag>
				<Tag colorScheme={'green'}>Small Businesses</Tag>
				<Tag colorScheme={'red'}>Digital Marketing</Tag>
				<Tag colorScheme={'yellow'}>Branding</Tag>

				<Spacer />
				<Button colorScheme={'orange'}>Write</Button>
			</HStack>
		</>
		// <>
		// 	<Tr>
		// 		<Td>The Importance of Establishing a Strong Online Presence for Small Business</Td>
		// 	</Tr>
		// 	<HStack ml={5} mr={10}>
		// 		<Tag colorScheme={'yellow'}>Online Presence</Tag>
		// 		<Tag colorScheme={'green'}>Small Businesses</Tag>
		// 		<Tag colorScheme={'red'}>Digital Marketing</Tag>
		// 		<Tag colorScheme={'yellow'}>Branding</Tag>

		// 		<Spacer />
		// 		<Button colorScheme={'orange'}>Write</Button>
		// 	</HStack>
		// </>
	)
}

export default TopicsTableRow
