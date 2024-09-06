import { ReactNode } from "react";
import { StyledContainer } from "./Container.styles.ts";

type ContainerProps = {
  children: ReactNode;
}


function Container({ children }: ContainerProps) {
  return (
    <StyledContainer>{children}</StyledContainer>
  );
}

export default Container;