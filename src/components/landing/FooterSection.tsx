const links = {
  Product: ["Features", "Pricing", "Changelog", "Docs"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Security"],
};

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold gradient-text">Acme</span>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              Building the tools that help teams ship extraordinary products.
            </p>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p className="font-semibold text-sm mb-4">{heading}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Acme Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
