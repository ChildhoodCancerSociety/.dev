interface SectionProps {
  title?: string;
  titleComponent?: JSX.Element | React.ReactNode;
}

const Section: React.FC<React.PropsWithChildren<SectionProps>> = ({ title, titleComponent, children }) => <section>
  {Boolean(title) && <h2>{ title }</h2>}
  {Boolean(titleComponent) && titleComponent}
  {children}
</section>

export default Section;
