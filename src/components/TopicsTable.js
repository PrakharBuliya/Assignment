import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Tag,
	HStack,
	Spacer,
	Button
} from '@chakra-ui/react'

import React from 'react'

const TopicsTable = () => {
	return (
		<>
			<TableContainer>
				<Table variant="simple">
					<Thead bgColor={'gray.200'}>
						<Tr>
							<Th>Recommended Topics</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>The Importance of Establishing a Strong Online Presence for Small Business</Td>
						</Tr>
						<HStack ml={5} mr={10}>
							<Tag colorScheme={'yellow'}>Online Presence</Tag>
							<Tag colorScheme={'green'}>Small Businesses</Tag>
							<Tag colorScheme={'red'}>Digital Marketing</Tag>
							<Tag colorScheme={'yellow'}>Branding</Tag>

							<Spacer />
							<Button colorScheme={'orange'}>Write</Button>
						</HStack>

						<Tr>
							<Td>How fast Turnaround times in Logo and Website Design Benefits your Business </Td>
						</Tr>

						<HStack ml={5} mr={10}>
							<Tag colorScheme={'yellow'}>Online Presence</Tag>
							<Tag colorScheme={'green'}>Small Businesses</Tag>
							<Tag colorScheme={'red'}>Digital Marketing</Tag>
							<Tag colorScheme={'yellow'}>Branding</Tag>

							<Spacer />
							<Button colorScheme={'orange'}>Write</Button>
						</HStack>

						<Tr>
							<Td>Affordable Branding Solutions for Startups and Entrepreneurs</Td>
						</Tr>
						<HStack ml={5} mr={10}>
							<Tag colorScheme={'yellow'}>Online Presence</Tag>
							<Tag colorScheme={'green'}>Small Businesses</Tag>
							<Tag colorScheme={'red'}>Digital Marketing</Tag>
							<Tag colorScheme={'yellow'}>Branding</Tag>

							<Spacer />
							<Button colorScheme={'orange'}>Write</Button>
						</HStack>

						<Tr>
							<Td>Expert Tips for choosing the Right Digital Marketing Agency for your Business</Td>
						</Tr>
						<HStack ml={5} mr={10}>
							<Tag colorScheme={'yellow'}>Online Presence</Tag>
							<Tag colorScheme={'green'}>Small Businesses</Tag>
							<Tag colorScheme={'red'}>Digital Marketing</Tag>
							<Tag colorScheme={'yellow'}>Branding</Tag>

							<Spacer />
							<Button colorScheme={'orange'}>Write</Button>
						</HStack>
					</Tbody>
				</Table>
			</TableContainer>
		</>
	)
}

export default TopicsTable
