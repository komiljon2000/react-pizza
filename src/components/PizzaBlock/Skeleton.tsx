import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#dedede"
    foregroundColor="#ffffff"
    {...props}
  >
    <circle cx="129" cy="119" r="115" />
    <rect x="10" y="260" rx="8" ry="8" width="250" height="25" />
    <rect x="10" y="404" rx="6" ry="6" width="90" height="26" />
    <rect x="118" y="392" rx="8" ry="8" width="140" height="45" />
    <rect x="9" y="304" rx="8" ry="8" width="250" height="76" />
  </ContentLoader>
);

export default Skeleton;
