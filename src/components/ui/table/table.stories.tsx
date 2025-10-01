import { Badge } from '../badge/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '../checkbox/checkbox';
import { useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  MoreHorizontal,
  Star,
} from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "./table";

const meta = {
  title: "UI/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A component for displaying tabular data with rows and columns. Provides semantic HTML table elements with accessible markup.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Appearance Props
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the table.",
      table: {
        category: "Appearance Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Content Props
    children: {
      control: false,
      description:
        "The table content including TableHeader, TableBody, and TableFooter.",
      table: {
        category: "Content Props",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },

    // HTML Props
    role: {
      control: "text",
      description: "ARIA role attribute for accessibility.",
      table: {
        category: "HTML Props",
        type: { summary: "string" },
        defaultValue: { summary: '"table"' },
      },
    },
    id: {
      control: "text",
      description:
        "The id attribute of the table for accessibility and labeling.",
      table: {
        category: "HTML Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
  },
];

const invoices = [
  {
    id: "INV-001",
    client: "Acme Corp",
    amount: "$2,500.00",
    status: "Paid",
    date: "2024-01-15",
  },
  {
    id: "INV-002",
    client: "Global Inc",
    amount: "$1,200.00",
    status: "Pending",
    date: "2024-01-14",
  },
  {
    id: "INV-003",
    client: "Tech Solutions",
    amount: "$3,750.00",
    status: "Overdue",
    date: "2024-01-10",
  },
  {
    id: "INV-004",
    client: "StartUp LLC",
    amount: "$890.00",
    status: "Paid",
    date: "2024-01-12",
  },
];

const products = [
  {
    id: 1,
    name: "Laptop Pro",
    category: "Electronics",
    price: 1299.99,
    stock: 45,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    stock: 120,
    rating: 4.3,
  },
  {
    id: 3,
    name: "Office Chair",
    category: "Furniture",
    price: 299.99,
    stock: 8,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Desk Lamp",
    category: "Furniture",
    price: 89.99,
    stock: 25,
    rating: 4.1,
  },
];

// Interactive playground for testing different table configurations
export const Playground: Story = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>A list of users and their information.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.slice(0, 4).map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Badge
                variant={user.status === "Active" ? "default" : "secondary"}
              >
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Users</TableCell>
          <TableCell>{users.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground showing a complete table with caption, header, body, and footer.",
      },
    },
  },
};

// Default table from docs
export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Table with caption
export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice ID</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.slice(0, 3).map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-mono">{invoice.id}</TableCell>
            <TableCell>{invoice.client}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>
              <Badge
                variant={
                  invoice.status === "Paid"
                    ? "default"
                    : invoice.status === "Pending"
                      ? "secondary"
                      : "destructive"
                }
              >
                {invoice.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with a caption describing the content.",
      },
    },
  },
};

// Table with footer
export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell className="text-right">${product.price}</TableCell>
            <TableCell className="text-right">{product.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total Items</TableCell>
          <TableCell className="text-right">
            $
            {products
              .reduce((sum, product) => sum + product.price, 0)
              .toFixed(2)}
          </TableCell>
          <TableCell className="text-right">
            {products.reduce((sum, product) => sum + product.stock, 0)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with footer row showing totals or summary data.",
      },
    },
  },
};

// Table with badges and status
export const WithStatusBadges: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-mono text-sm">{invoice.id}</TableCell>
            <TableCell className="font-medium">{invoice.client}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell className="font-mono">{invoice.amount}</TableCell>
            <TableCell>
              <Badge
                variant={
                  invoice.status === "Paid"
                    ? "default"
                    : invoice.status === "Pending"
                      ? "secondary"
                      : "destructive"
                }
              >
                {invoice.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with status badges for visual status indicators.",
      },
    },
  },
};

// Table with actions
export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Badge
                variant={user.status === "Active" ? "default" : "secondary"}
              >
                {user.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with action buttons for row-level operations.",
      },
    },
  },
};

// Table with checkboxes
export const WithCheckboxes: Story = {
  render: function WithCheckboxesExample() {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = (checked: boolean) => {
      setSelectAll(checked);
      if (checked) {
        setSelectedRows(users.map((user) => user.id));
      } else {
        setSelectedRows([]);
      }
    };

    const handleRowSelect = (userId: number, checked: boolean) => {
      if (checked) {
        setSelectedRows([...selectedRows, userId]);
      } else {
        setSelectedRows(selectedRows.filter((id) => id !== userId));
        setSelectAll(false);
      }
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selectAll}
                onCheckedChange={handleSelectAll}
                aria-label="Select all"
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              data-state={
                selectedRows.includes(user.id) ? "selected" : undefined
              }
            >
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(user.id)}
                  onCheckedChange={(checked) =>
                    handleRowSelect(user.id, checked as boolean)
                  }
                  aria-label={`Select ${user.name}`}
                />
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge
                  variant={user.status === "Active" ? "default" : "secondary"}
                >
                  {user.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Table with selectable rows using checkboxes.",
      },
    },
  },
};

// Sortable table
export const Sortable: Story = {
  render: function SortableExample() {
    const [sortConfig, setSortConfig] = useState<{
      key: keyof (typeof products)[0] | null;
      direction: "asc" | "desc";
    }>({
      key: null,
      direction: "asc",
    });

    const sortedProducts = [...products].sort((a, b) => {
      if (!sortConfig.key) return 0;

      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    const handleSort = (key: keyof (typeof products)[0]) => {
      setSortConfig({
        key,
        direction:
          sortConfig.key === key && sortConfig.direction === "asc"
            ? "desc"
            : "asc",
      });
    };

    const SortIcon = ({ column }: { column: keyof (typeof products)[0] }) => {
      if (sortConfig.key !== column)
        return <ArrowUpDown className="ml-2 h-4 w-4" />;
      return sortConfig.direction === "asc" ? (
        <ArrowUp className="ml-2 h-4 w-4" />
      ) : (
        <ArrowDown className="ml-2 h-4 w-4" />
      );
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort("name")}
                className="h-auto p-0 font-medium"
              >
                Product
                <SortIcon column="name" />
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort("category")}
                className="h-auto p-0 font-medium"
              >
                Category
                <SortIcon column="category" />
              </Button>
            </TableHead>
            <TableHead className="text-right">
              <Button
                variant="ghost"
                onClick={() => handleSort("price")}
                className="h-auto p-0 font-medium"
              >
                Price
                <SortIcon column="price" />
              </Button>
            </TableHead>
            <TableHead className="text-right">
              <Button
                variant="ghost"
                onClick={() => handleSort("stock")}
                className="h-auto p-0 font-medium"
              >
                Stock
                <SortIcon column="stock" />
              </Button>
            </TableHead>
            <TableHead className="text-right">
              <Button
                variant="ghost"
                onClick={() => handleSort("rating")}
                className="h-auto p-0 font-medium"
              >
                Rating
                <SortIcon column="rating" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="text-right">${product.price}</TableCell>
              <TableCell className="text-right">{product.stock}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <Star className="h-4 w-4 fill-current text-yellow-500" />
                  {product.rating}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive table with sortable columns.",
      },
    },
  },
};

// Dense table
export const Dense: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="h-8 px-2 text-xs">ID</TableHead>
          <TableHead className="h-8 px-2 text-xs">Name</TableHead>
          <TableHead className="h-8 px-2 text-xs">Email</TableHead>
          <TableHead className="h-8 px-2 text-xs">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.concat(users).map((user, index) => (
          <TableRow key={`${user.id}-${index}`}>
            <TableCell className="py-1 px-2 text-xs">
              {user.id + index * 10}
            </TableCell>
            <TableCell className="py-1 px-2 text-xs">{user.name}</TableCell>
            <TableCell className="py-1 px-2 text-xs">{user.email}</TableCell>
            <TableCell className="py-1 px-2">
              <Badge
                variant={user.status === "Active" ? "default" : "secondary"}
                className="text-xs h-5"
              >
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Compact table with reduced padding and smaller text.",
      },
    },
  },
};

// Empty state
export const EmptyState: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={4}
            className="h-24 text-center text-muted-foreground"
          >
            No users found.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with empty state message when no data is available.",
      },
    },
  },
};

// Wide content
export const WideContent: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Hire Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-mono">EMP001</TableCell>
            <TableCell className="font-medium">John Michael Doe</TableCell>
            <TableCell>john.doe@company.com</TableCell>
            <TableCell>Engineering</TableCell>
            <TableCell>Senior Software Engineer</TableCell>
            <TableCell>San Francisco, CA</TableCell>
            <TableCell>2023-01-15</TableCell>
            <TableCell>
              <Badge>Active</Badge>
            </TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                View
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-mono">EMP002</TableCell>
            <TableCell className="font-medium">Jane Elizabeth Smith</TableCell>
            <TableCell>jane.smith@company.com</TableCell>
            <TableCell>Product Management</TableCell>
            <TableCell>Product Manager</TableCell>
            <TableCell>New York, NY</TableCell>
            <TableCell>2023-03-20</TableCell>
            <TableCell>
              <Badge>Active</Badge>
            </TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                View
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with many columns showing horizontal scroll behavior.",
      },
    },
  },
};
