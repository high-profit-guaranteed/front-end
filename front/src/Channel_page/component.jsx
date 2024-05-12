import Label from './components/Label';
import Select from './components/Select';
import Input from './components/Input';
import Card, { CardTitle, CardDescription, CardHeader, CardFooter } from './components/Card';
import Badge from './components/Badge';
import Button from './components/Button';
import Drawer, { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerClose, DrawerFooter, DrawerContent } from './components/Drawer'; // Drawer 컴포넌트에서 모든 하위 컴포넌트들을 가져옵니다.
import Textarea from './components/Textarea';

export default function Component() {
  return (
    <>
      <header className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">Free Board</h1>
      </header>
      <main className="container mx-auto py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Label htmlFor="filter-by">Filter by:</Label>
            <Select className="w-48" id="filter-by">
              <option value="date">Date</option>
              <option value="category">Category</option>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <Input className="w-48" id="filter-date" placeholder="Select a date" type="date" />
            <Input className="w-48" id="filter-category" placeholder="Enter a category" type="text" />
          </div>
        </div>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Free Giveaway</CardTitle>
              <CardDescription>
                We are giving away free products to our loyal customers. Sign up now to enter the drawing.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <p className="text-sm text-gray-500">June 15, 2023</p>
              <Badge variant="primary">Giveaway</Badge>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community Meetup</CardTitle>
              <CardDescription>
                Join us for a free community meetup to network and learn from industry experts.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <p className="text-sm text-gray-500">June 20, 2023</p>
              <Badge variant="secondary">Event</Badge>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Free Webinar</CardTitle>
              <CardDescription>
                Register for our free webinar on the latest industry trends. Spaces are limited, so sign up now.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <p className="text-sm text-gray-500">June 25, 2023</p>
              <Badge variant="tertiary">Education</Badge>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="fixed bottom-6 right-6" size="sm" variant="primary">
            Add Notice
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Add New Notice</DrawerTitle>
            <DrawerDescription>Fill out the form below to add a new notice to the board.</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 py-6">
            <form className="grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter the notice title" type="text" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter the notice description" rows={4} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="category">Category</Label>
                <Select id="category">
                  <option value="">Select a category</option>
                  <option value="giveaway">Giveaway</option>
                  <option value="event">Event</option>
                  <option value="education">Education</option>
                </Select>
              </div>
            </form>
          </div>
          <DrawerFooter>
            <Button variant="primary">Save Notice</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}