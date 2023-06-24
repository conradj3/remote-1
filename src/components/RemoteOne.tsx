import { Text, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

var buildDate = process.env.BUILD_DATE;

// These props are injected by the shell app.
// TODO: Publish this type in an npm package so all remotes can reference it (or, even simpler, put remotes and shell in a monorepo)
type RemoteProps = {
  parentCount: number;
  urls: Record<"about" | "home", string>;
  user: { id: number; name: string };
};

export default function RemoteOne({ urls, user, parentCount }: RemoteProps) {
  const [count, setCount] = useState(0);

  const location = useLocation();

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <p>Build date: {buildDate}</p>
      <p>Hi {user.name}</p>
      <Text>Click count: {count} </Text>
      <Text>Shell count: {parentCount} </Text>
      <Button onClick={() => setCount(count + 1)}>Increment local count</Button>

      <Link to={urls.about}>About</Link>
      {location.pathname !== "/" && (
        <Button as={Link} to="/">
          Back to shell
        </Button>
      )}
    </Flex>
  );
}