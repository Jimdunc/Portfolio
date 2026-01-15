const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 James Gatheru. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Crafted with passion & precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
