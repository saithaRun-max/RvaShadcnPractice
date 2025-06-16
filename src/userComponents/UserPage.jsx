import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const UserPage = () => {
  const [email, setEmail] = useState("saitharun@gamil.com");
  const [fName, setFName] = useState("Sai Tharun");
  const [number, setNumber] = useState("9393231153");
  const [password, setPassword] = useState("1346978");
  const [data, setData] = useState([]);

  const submitData = () => {
    const userData = {
      name: fName,
      email: email,
      number: number,
      password: password,
    };

    setData([...data, userData]);
  };

  console.log(data);

  return (
    <>
      <div className=" align-middle flex justify-around">
        <div>
          <Card className="w-full max-w-sm ">
            <CardHeader>
              <CardTitle>Enter Your Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="fName"
                      type="text"
                      placeholder="Enter Full Name"
                      required
                      value={fName}
                      onChange={(e) => setFName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="number"
                      placeholder="Enter Phone Number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full" onClick={submitData}>
                Signup
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          {data.map((ele) => (
            <div>
              <h6>{ele.name}</h6>
              <h6>{ele.email}</h6>
              <h6>{ele.number}</h6>
             
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPage;
