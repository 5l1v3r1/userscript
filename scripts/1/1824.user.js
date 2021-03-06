// ==UserScript==
// @name          Userscripts.org Favicon
// @namespace     http://zoolcar9.lhukie.net/
// @include       http://userscripts.org/*
// @include       http://www.userscripts.org/*
// @description	  Makes Userscripts.org's favicon less ugly
// ==/UserScript==

(function() {
  var link, head;

  link = document.createElement('link');
  link.setAttribute('rel', 'shortcut icon');
  link.setAttribute('href', 'data:image/png;base64,iVBORw0KGgoAAAANSU' +
    'hEUgAAABAAAAAQCAMAAAAoLQ9TAAAAB3RJTUUH1QcXCicu%2Bk2udgAAAAlwSFlz' +
    'AAAK8AAACvABQqw0mAAAAwBQTFRFAAAAIRoaKyIiNCoqOS4uOzAvPzMzSjw8UUFB' +
    'V0ZGZFBQZlJSZ1NTfGVkpUUApUYBpUYCpkYCp0gFqU8Oq1ISrFMUrVMUrlMWrFQW' +
    'rVcZrlYZrlcZrlgar1gar1kbrlocrlodsVgdsFsesFsfsFwfr14hsF0gsF4js14k' +
    'sl8mtF0ksmEms2IotGIptGQstWcxtmk0tmw0u2o2uGw2u205um87vGs5vms5vmw6' +
    'vW08hm1sh21tjXNyl3t6u3NAu3VDvXVEvHdEvHhFvHhHvnpIvn1LwG4%2BwXpKwH' +
    '1NxnhMyHtSyXxTyX1UwYRXyZNryZRvzp510Idj0opo1I1s1pFy2JR22pZ525h825' +
    'h93Jl%2Bp4eHq4uKsY%2BPsZCPt5SUwp6d356F356G35%2BHxaCf1aWC1ayL16%2' +
    'BP37efx6GhzKal0aqp2K%2Bv3LKx4KCI5aiU6Kya6Ly76L286b286r698bqw8ryy' +
    '872z87209sK798O88sXE88XE9MbF9sfG%2BsfD%2BMnI%2BcrJ%2BsvK%2B8zL%2' +
    'FMvI%2FMzJ%2FczK%2Fc3L%2FM3M%2Fc3M%2Fs3M%2Fs7N%2F8%2FO%2F%2F%2F%' +
    '2FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
    'AAAAAAAAAAAAAAs8SmGwAAAI10Uk5T%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%' +
    '2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2' +
    'F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F' +
    '%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%' +
    '2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2' +
    'F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F' +
    '%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%' +
    '2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2' +
    'F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F' +
    '%2F%2F%2F%2F8A2F5VawAAAOhJREFUeNpj6AEBUxVhEVUPMJMBRCjxgYEhTEDNO9' +
    'JTQNArwtwYIuAa1N3dnZTY3d1mlgoUcJKRruyGglA7BXsGST6hlm5bnvpszozuXD' +
    '4%2BZQYZPr6ybkaGTGsG7u5gPj55BgdlvsDuOJv2Qt6cNi0%2BCReGHm0%2B8fzu' +
    '7ujY7q4QRX4doC2i4V0Vnd1WUd2tdd15ckAB3baugu7umsbu7tqGLhOggH5pMUtW' +
    'F9DSIq74cgOgQIBlaTIHEysbM3tMiVEKyKXusmHNHdVVTW0JGr4Qv%2Fipi1l4%2' +
    'B7hJafrDfNuT5qyn55gOZgIAumlbvkMFsDAAAAAASUVORK5CYII%3D');

  head = document.getElementsByTagName('head')[0];
  if(!head) return;
  head.appendChild(link);
})();
