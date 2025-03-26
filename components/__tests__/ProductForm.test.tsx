// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';
// import '@testing-library/jest-dom';
// import { ProductForm } from '../organisms/ProductForm';

// // Mock UI components
// jest.mock('@/components/ui/command', () => ({
//   Command: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
//   CommandInput: (props: any) => <input {...props} />,
//   CommandEmpty: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
//   CommandGroup: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
//   CommandItem: ({ children, onSelect }: any) => <div onClick={onSelect}>{children}</div>,
// }));

// jest.mock('@/components/ui/popover', () => ({
//   Popover: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
//   PopoverContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
//   PopoverTrigger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
// }));

// // Mock API responses
// const mockCategories = [
//   { id: 1, name: 'Electronics', parent_id: null },
//   { id: 2, name: 'Computers', parent_id: 1 },
//   { id: 3, name: 'Furniture', parent_id: null },
// ];

// const mockProperties = {
//   data: {
//     options: [
//       {
//         id: 1,
//         name: 'Color',
//         options: [
//           {
//             id: 1,
//             name: 'Red',
//             childProperties: [
//               { id: 4, name: 'Shade', options: [{ id: 5, name: 'Crimson' }] },
//             ],
//           },
//         ],
//       },
//       { id: 2, name: 'Size', options: [{ id: 2, name: 'Large' }] },
//     ],
//   },
// };

// const mockOptionProperties = {
//   data: [{ id: 4, name: 'Shade', options: [{ id: 5, name: 'Crimson' }] }],
// };

// const server = setupServer(
//   rest.get('https://stagingapi.mazaady.com/api/v1/all-categories/web', (req, res, ctx) =>
//     res(ctx.json({ data: { categories: mockCategories } }))
//   ),
//   rest.get('https://stagingapi.mazaady.com/api/v1/properties/:id', (req, res, ctx) =>
//     res(ctx.json(mockProperties))
//   ),
//   rest.get('https://stagingapi.mazaady.com/api/v1/option-properties/:id', (req, res, ctx) =>
//     res(ctx.json(mockOptionProperties))
//   )
// );

// beforeAll(() => server.listen());
// afterEach(() => {
//   server.resetHandlers();
//   jest.clearAllMocks();
// });
// afterAll(() => server.close());

// describe('ProductForm', () => {
//   test('renders and loads main categories', async () => {
//     render(<ProductForm />);
//     expect(await screen.findByText('Select Main Category')).toBeVisible();
//     expect(await screen.findAllByRole('listitem')).toHaveLength(3);
//   });

//   test('full category selection flow', async () => {
//     render(<ProductForm />);
//     fireEvent.click(await screen.findByText('Select Main Category'));
//     fireEvent.click(await screen.findByText('Electronics'));
//     fireEvent.click(await screen.findByText('Select Subcategory'));
//     fireEvent.click(await screen.findByText('Computers'));
//     await waitFor(() => expect(screen.getByText('Select Color')).toBeVisible());
//   });

//   test('property selection with nested options', async () => {
//     render(<ProductForm />);
//     fireEvent.click(await screen.findByText('Select Main Category'));
//     fireEvent.click(await screen.findByText('Electronics'));
//     fireEvent.click(await screen.findByText('Select Subcategory'));
//     fireEvent.click(await screen.findByText('Computers'));

//     await waitFor(() => fireEvent.click(screen.getByText('Select Color')));
//     fireEvent.click(await screen.findByText('Red'));
//     await waitFor(() => expect(screen.getByText('Select Shade')).toBeVisible());
//   });

//   test('custom value input', async () => {
//     render(<ProductForm />);
//     fireEvent.click(await screen.findByText('Select Main Category'));
//     fireEvent.click(await screen.findByText('Electronics'));
//     fireEvent.click(await screen.findByText('Select Subcategory'));
//     fireEvent.click(await screen.findByText('Computers'));

//     await waitFor(() => fireEvent.click(screen.getByText('Select Size')));
//     fireEvent.click(await screen.findByText('Other'));

//     const input = await screen.findByPlaceholderText('Enter Size');
//     fireEvent.change(input, { target: { value: 'XXL' } });
//     await waitFor(() => expect(input).toHaveValue('XXL'));
//   });

//   test('form submission with results', async () => {
//     render(<ProductForm />);
//     fireEvent.click(await screen.findByText('Select Main Category'));
//     fireEvent.click(await screen.findByText('Electronics'));
//     fireEvent.click(await screen.findByText('Select Subcategory'));
//     fireEvent.click(await screen.findByText('Computers'));

//     fireEvent.click(await screen.findByText('Submit'));
//     await waitFor(() => {
//       expect(screen.getByText('Main Category')).toBeVisible();
//       expect(screen.getByText('Electronics')).toBeVisible();
//       expect(screen.getByText('Subcategory')).toBeVisible();
//       expect(screen.getByText('Computers')).toBeVisible();
//     });
//   });
// });
