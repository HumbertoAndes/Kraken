const { Given, When, Then } = require('@cucumber/cucumber');

When('the Customer is logged into the ghost', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let email = await this.driver.$('#ember6');
    email.setValue("h.sosa@uniandes.edu.co");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let pass = await this.driver.$('input[name="password"]');
    pass.setValue("Colombia1*");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let button = await this.driver.$('#ember10');
    button.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
});

When('the customer clicks on members and new members', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let button = await this.driver.$('#ember28');
    button.click();
    await new Promise(resolve => setTimeout(resolve, 4000));
    let button1 = await this.driver.$('a[class="ember-view gh-btn gh-btn-primary"]');
    button1.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
});

When('the customer enters the new member', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let name = await this.driver.$('input[name="name"]');
    name.setValue("Pepito Pruebas");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let email = await this.driver.$('input[name="email"]');
    email.setValue("PepitoPruebas@andes.edu.co");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let label = await this.driver.$('input[class="ember-power-select-trigger-multiple-input"]');
    label.setValue("LabelPepito");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let confirmar = await this.driver.$('li[class="ember-power-select-option"]');
    confirmar.click();
    label.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    let nota = await this.driver.$('textarea[name="note"]');
    nota.setValue("Esta nota es para hacer pruebas al modulo de members");
    await new Promise(resolve => setTimeout(resolve, 3000));
});

When('the customer saves the members', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let save = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    save.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
});

Then('the members is register succesful', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let confirmacion = await this.driver.$('svg[viewBox="0 0 24 24"]');
    await confirmacion.isDisplayed();
});

When('the customer clicks on tags and new tags', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let tags = await this.driver.$('a[id="ember27"]');
    tags.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    let newTags = await this.driver.$('a[class="ember-view gh-btn gh-btn-primary"]');
    newTags.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
});

When('the customer enters the new tag', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let tags = await this.driver.$('input[id="tag-name"]');
    tags.setValue("Tag Name Test");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let slug = await this.driver.$('input[name="slug"]');
    slug.setValue("prueba");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let description = await this.driver.$('textarea[name="description"]');
    description.setValue("description test for ghost");
    await new Promise(resolve => setTimeout(resolve, 2000));
});

Then('the customer saves the tag', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let save = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    save.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
});

When('the customer clicks on members and new page', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let page = await this.driver.$('a[href="#/pages/"]');
    page.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    let newPage = await this.driver.$('a[href="#/editor/page/"]');
    newPage.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
});

When('the customer enters the new page', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let page = await this.driver.$('textarea[placeholder="Page title"]');
    page.setValue("Tittle Page");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let newPage = await this.driver.$('div[data-kg="editor"]');
    newPage.setValue("Description of page test");
    await new Promise(resolve => setTimeout(resolve, 2000));
});

When('the customer saves the page', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let button = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]');
    button.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    let button1 = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-large"]');
    button1.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    let button2 = await this.driver.$('button[class="gh-btn gh-btn-large gh-btn-pulse ember-view"]');
    button2.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
});

Then('the page is register succesful', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let message = await this.driver.$('span[class="green"]');
    message.isDisplayed();
    await new Promise(resolve => setTimeout(resolve, 2000));
});


When('the customer clicks on published and new post', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let page = await this.driver.$('a[title="Published"]');
    page.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    let newPage = await this.driver.$('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]');
    newPage.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
});

When('the customer enters the new post', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let page = await this.driver.$('textarea[placeholder="Post title"]');
    page.setValue("Tittle Post");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let newPage = await this.driver.$('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]');
    newPage.setValue("Description of post test");
    await new Promise(resolve => setTimeout(resolve, 2000));
});

When('the customer saves the post', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let button = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]');
    button.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    let button1 = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-large"]');
    button1.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    let button2 = await this.driver.$('button[class="gh-btn gh-btn-large gh-btn-pulse ember-view"]');
    button2.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
});

Then('the post is register succesful', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let message = await this.driver.$('span[class="green"]');
    message.isDisplayed();
    await new Promise(resolve => setTimeout(resolve, 2000));
});

When('the customer clicks on view site', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let page = await this.driver.$('a[href="#/site/"]');
    page.click();
});

Then('the view site is succesful', async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    let cosa = await this.driver.$('a[href="https://ghost-waki.onrender.com/"]');
    cosa.isDisplayed();
    await new Promise(resolve => setTimeout(resolve, 3000));
});
