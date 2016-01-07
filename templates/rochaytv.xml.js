var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
<head>
<style>
    .main {
        background-color: #eeeeee;
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
          <title>In Conversation with...</title>
        </header>
        <listItemLockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/NaveenTestimonial-A-HD.mov">
          <title>Paul McKenna</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/rochaytv-preview-image-mckenna.png" width="857" height="482" />
              <title>Paul McKenna in conversation with Kevin Rochay</title>
              <subtitle>Paul discusses his success mindset...</subtitle>
              <description>Paul talks about his successes and overcoming challenges, expressing his desire to change the way we think about our own problems and how he is helping those with severe issues.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/KevinTestimonial-C-HD.mov">
          <title>Noel Edmonds</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/rochaytv-preview-image-edmonds.png" width="857" height="482" />
              <title>Noel Edmonds in conversation with Kevin Rochay</title>
              <subtitle>Noel tells us about his new ventures...</subtitle>
              <description>Noel talks about his new hand built car company at the Monaco Top Marques luxury show and discusses his positive mindest and how it has driven him from one success to another.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/NaveenTestimonial-B-HD.mov">
          <title>Stewart McIntyre</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/rochaytv-preview-image-mcintyre.png" width="857" height="482" />
              <title>Stewart McIntyre in conversation with Kevin Rochay</title>
              <subtitle>Stewart discusses the challenges of running Sunseeker Superyachts...</subtitle>
              <description>Stewart discusses the success of Sunseeker in the current financial market and how they overcame their challenges to be one of the leading lights of the luxury industry in Great Britain.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
<listItemLockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/KevinTestimonials-D-HD.mov">
          <title>Mark Aldridge</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/rochaytv-preview-image-aldridge.png" width="857" height="482" />
              <title>Mark Aldridge in conversation with Kevin Rochay</title>
              <subtitle>Mark discusses the investment sector...</subtitle>
              <description>Mark talks about the the successes of his investment company and how he overcame the challenges in the current financial market place.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
      </section>
    </list>
  </listTemplate>
</document>`
}
