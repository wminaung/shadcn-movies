import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: Props) => {
  console.log();
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
    </>
  );
};

export default BaseLayout;
