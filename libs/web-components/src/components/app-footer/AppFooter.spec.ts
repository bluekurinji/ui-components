import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/svelte';
import GoAAppFooter from './AppFooterWrapper.test.svelte'

function createElement(props = {}) {
  return render(GoAAppFooter, { ...props });
}

describe('GoAAppFooter Component', () => {

  it("should render", async () => {
    const el = await createElement();
    const appFooter = el.container.querySelectorAll('.app-footer-container');
    expect(appFooter).toBeTruthy();
  });

  it("allows for setting of meta links", async () => {

    const metalinks = [
      { "url":"A", "title": "xyz1" },
      { "url":"B", "title": "xyz2" },
      { "url":"C", "title": "xyz3" },
      { "url":"D", "title": "xyz4" }
    ];

    const el = createElement({ metaLinks: metalinks });

    await waitFor(() => {
      const metaLinks = el.container.querySelectorAll('.meta-link');

      const urls: string[] = [];
      const title: string[] = [];
      metaLinks.forEach(function(metaLink) {
        const linkElement = (metaLink as HTMLAnchorElement);
        urls.push(linkElement.href);
        title.push(linkElement.text);
      });

      expect(["http://localhost/A", "http://localhost/B", "http://localhost/C", "http://localhost/D"]).toEqual(urls.sort());
      expect(["xyz1", "xyz2", "xyz3", "xyz4"]).toEqual(title.sort());


      const navigationLink = el.container.querySelectorAll('.navigation-link');
      expect(navigationLink.length).toBe(0);
    });

  });

  it("allows for setting of navigation links", async () => {

    const navigationlinks = [
      { "url":"A", "title": "xyz1" },
      { "url":"B", "title": "xyz2" },
      { "url":"C", "title": "xyz3" },
      { "url":"D", "title": "xyz4" }
    ];

    const el = await createElement({ navigationLinks: navigationlinks });

    await waitFor(() => {
      const navigationLinks = el.container.querySelectorAll('.navigation-link');
      const urls: string[] = [];
      const title: string[] = [];
      navigationLinks.forEach(function(navigationLink) {
        const linkElement = (navigationLink as HTMLAnchorElement);
        urls.push(linkElement.href);
        title.push(linkElement.text);
      });

      expect(["http://localhost/A", "http://localhost/B", "http://localhost/C", "http://localhost/D"]).toEqual(urls.sort());
      expect(["xyz1", "xyz2", "xyz3", "xyz4"]).toEqual(title.sort());

      const metaLink = el.container.querySelectorAll('.meta-link');
      expect(metaLink.length).toBe(0);
    });

  });

  it("allows for setting of navigation sections", async () => {

    const navigationsections = [
      { "name": "AAA", "links": [{ "url":"A", "title": "xyz1" }, { "url":"B", "title": "xyz2" }]},
      { "name": "BBB", "links": [{ "url":"C", "title": "xyz3" }, { "url":"D", "title": "xyz4" } , { "url":"E", "title": "xyz5" }]},
      { "name": "CCC", "links": [{ "url":"F", "title": "xyz6" }]}
    ];

    const el = await createElement({ navigationSections: navigationsections });

    await waitFor(() => {

      const sectionNames = el.container.querySelectorAll('.navigation-section-name');
      const names: string[] = [];
      sectionNames.forEach(function(sectionName) {
        const element = (sectionName as HTMLElement);
        names.push((element.firstChild as HTMLElement).textContent);
      });
      expect(["AAA", "BBB", "CCC"]).toEqual(names.sort());

      const navigationLinks = el.container.querySelectorAll('.navigation-link');
      const urls: string[] = [];
      const title: string[] = [];
      navigationLinks.forEach(function(navigationLink) {
        const linkElement = (navigationLink as HTMLAnchorElement);
        urls.push(linkElement.href);
        title.push(linkElement.text);
      });

      expect(["http://localhost/A", "http://localhost/B", "http://localhost/C", "http://localhost/D", "http://localhost/E", "http://localhost/F"]).toEqual(urls.sort());
      expect(["xyz1", "xyz2", "xyz3", "xyz4", "xyz5", "xyz6"]).toEqual(title.sort());

      const metaLink = el.container.querySelectorAll('.meta-link');
      expect(metaLink.length).toBe(0);

    });

  });

});
