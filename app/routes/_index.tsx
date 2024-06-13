import type { MetaFunction } from "@remix-run/node";
import { ColorSchemeToggle } from "~/components/ColorSchemeToggle/ColorSchemeToggle";
import { Button } from "@mantine/core";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Mantine Remix App" },
    { name: "description", content: "Welcome to Mantine!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Button><Link to={'/Demo'} prefetch="intent">Demo</Link></Button>
      <ColorSchemeToggle />
    </div>
  );
}
