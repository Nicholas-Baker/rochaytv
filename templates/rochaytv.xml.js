var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
<head>
<style>
    .main {
        background-color: #ffffff;
    }
</style>
</head>
  <listTemplate class="main">
    <banner>
      <background>
        <img src="${this.BASEURL}resources/rochaytv-bkg-banner1.png" width="1920" height="360" />
      </background>
    </banner>
    <list>
      <section>
        <header>
          <title>Kevin Rochay In Conversation with...</title>
        </header>
        <listItemLockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/NaveenTestimonial-A-HD.mov">
          <title>Noel Edmonds</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/rochaytv-preview-image-edmonds.png" width="857" height="482" />
              <title>Related Title 1</title>
              <subtitle>Related Subtitle 1</subtitle>
              <description>Lorem ipsum Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras. Interdum at. Eget habitasse elementum est, ipsum purus pede porttitor class, ut adipiscing, aliquet sed auctor, imperdiet arcu per diam dapibus libero duis. Enim eros in vel, volutpat.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/KevinTestimonial-C-HD.mov">
          <title>Paul McKenna</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/rochaytv-preview-image-mckenna.png" width="857" height="482" />
              <title>Related Title 2</title>
              <subtitle>Related Subtitle 2</subtitle>
              <description>Lorem ipsum Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras. Interdum at. Eget habitasse elementum est, ipsum purus pede porttitor class, ut adipiscing, aliquet sed auctor, imperdiet arcu per diam dapibus libero duis. Enim eros in vel, volutpat.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/NaveenTestimonial-B-HD.mov">
          <title>Stewart McIntyre</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/rochaytv-preview-image-mcintyre.png" width="857" height="482" />
              <title>Related Title 3</title>
              <subtitle>Related Subtitle 3</subtitle>
              <description>Lorem ipsum Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras. Interdum at. Eget habitasse elementum est, ipsum purus pede porttitor class, ut adipiscing, aliquet sed auctor, imperdiet arcu per diam dapibus libero duis. Enim eros in vel, volutpat.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
<listItemLockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/KevinTestimonials-D-HD.mov">
          <title>Mark Aldridge</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/rochaytv-preview-image-aldridge.png" width="857" height="482" />
              <title>Related Title 4</title>
              <subtitle>Related Subtitle 4</subtitle>
              <description>Lorem ipsum Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras. Interdum at. Eget habitasse elementum est, ipsum purus pede porttitor class, ut adipiscing, aliquet sed auctor, imperdiet arcu per diam dapibus libero duis. Enim eros in vel, volutpat.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
      </section>
    </list>
  </listTemplate>
</document>`
}
