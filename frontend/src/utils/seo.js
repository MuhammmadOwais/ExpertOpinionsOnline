export const updateSEO = (title, description) => {
  document.title = title ? `${title} | Expert Opinions` : "Expert Opinions — Enterprise Web Engineering, SEO & E-commerce";
  
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description || "Scale your brand with advanced SEO optimization, custom MERN stack development, and Amazon FBA store management. Partner with Expert Opinions today.");
};
