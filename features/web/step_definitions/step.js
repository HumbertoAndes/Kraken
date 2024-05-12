const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');

async function takeScreenshot(driver) {
    let contador  = 0;
    const times = new Date().getTime();
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(`/Users/betososa/features/ScreenShots/pantalla_${times}-${contador}.png`, screenshot, 'base64');
    contador++;
}

module.exports = {
    takeScreenshot
};


When('the Customer is logged into the ghost', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let email = await this.driver.$('#ember6');
    email.setValue("h.sosa@uniandes.edu.co");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let pass = await this.driver.$('input[name="password"]');
    pass.setValue("Colombia1*");
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
    let button = await this.driver.$('#ember10');
    button.click();
    await new Promise(resolve => setTimeout(resolve, 4000));
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
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
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
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
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
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
});

Then('the customer saves the tag', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let save = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    save.click();
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
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
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
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
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
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
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
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
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
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
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
});

Then('the admin view all blogs related to developers', async function()  {
    let results = await this.driver.$('strong[class="font-semibold text-gray-600"]')
    results.firt().contains('developers')
})

When('the admin looking for developers', async function() {
    let inputSearch = await this.driver.$('input[placeholder="Search across all creators"]')
    inputSearch.setValue("developers")
    await new Promise(resolve => setTimeout(resolve, 2000));
})

Given('the admin select the explore option', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let buttonExplore = await this.driver.$('button[data-test-button="confirm-publish"]')
    buttonExplore.click()
    await new Promise(resolve => setTimeout(resolve, 2000));
})

When('the admin select the posts option', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let buttonPosts = await this.driver.$('#ember19')
    buttonPosts.click()
    await new Promise(resolve => setTimeout(resolve, 2000));
})

When('the admin create a post', async function () {
    let iconMore = await this.driver.$('#ember20')
    iconMore.click()
    let titlePost = await this.driver.$('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]')
    titlePost.setValue('Post Pruebas Automatizadas')
    let descriptionPost = await this.driver.$('div[class="kg-prose"]')
    descriptionPost.setValue('Esta es un prueba automatizada para la universidad de los andes')
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
    let publishPost = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]')    
    publishPost.click()
    await new Promise(resolve => setTimeout(resolve, 2000));
    let acceptChanges = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-large"]')
    acceptChanges.click()
    await new Promise(resolve => setTimeout(resolve, 2000));
    let confirmPublish = await this.driver.$('button[data-test-button="confirm-publish"]')
    confirmPublish.click()
})

Then('the admin validates the creation of the post',  async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let titlePostPublish = await this.driver.$('div[class="gh-post-bookmark-title"]')
    titlePostPublish.contains('Post Pruebas Automatizadas')
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
})

Then('validates that the post has been published', async function()  {
    let validatePublish = await this.driver.$('div[class="gh-post-bookmark-title"]')
    validatePublish.contains('Post Pruebas Automatizadas')
})

Then('publish the post', async function() {
    let publishPost = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]')    
    publishPost.click()
    await new Promise(resolve => setTimeout(resolve, 2000));
    let acceptChanges = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-large"]')
    acceptChanges.click()
    await new Promise(resolve => setTimeout(resolve, 2000));
    let confirmPublish = await this.driver.$('button[data-test-button="confirm-publish"]')
    confirmPublish.click()
    await new Promise(resolve => setTimeout(resolve, 2000));
})

When('the admin from the main panel select draft postings', async function() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let allPost = await this.driver.$('a[class="ember-view"]')
    allPost.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    let editPost = await this.driver.$('span.gh-post-list-cta.edit')
    editPost.first().click()
    await new Promise(resolve => setTimeout(resolve, 2000));
    let previewPost = await this.driver.$('button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]')
    previewPost.click()
    await new Promise(resolve => setTimeout(resolve, 2000)); 
})

When('the admin is logged into the ghost', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let email = await this.driver.$('input[name="identification"]');
    email.setValue("lm.avilas1@uniandes.edu.co");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let pass = await this.driver.$('input[name="password"]');
    pass.setValue("AvilaLina1");
    await new Promise(resolve => setTimeout(resolve, 2000));
    let button = await this.driver.$('#ember5');
    button.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
})

Given('the admin select the drafs option', async function() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let buttonDrafts = await this.driver.$('a[title="Drafts"]')
    buttonDrafts.click()
})

When('the admin edit a post', async function() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let buttonDrafts = await this.driver.$('span.gh-post-list-cta.edit')
    buttonDrafts.first().click()
    let buttonSetting = await this.driver.$('button[ title="Settings"]')
    buttonSetting.click()
    let buttonDeleteFirst = await this.driver.$('button[class="gh-btn gh-btn-outline gh-btn-icon gh-btn-fullwidth"]')
    buttonDeleteFirst.setDisplayed()        
})

Then('the admin validates the deletion of the post', async function(){
    let deleteFinish = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]')
    deleteFinish.click()
})

Given('the admin select the schedules option', async function() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let buttonSchedules = await this.driver.$('a[title="Scheduled"]')
    buttonSchedules.click()
})

When('the admin create a scheduled publication', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let buttonCreatePost = await this.driver.$('a[class="ember-view gh-btn gh-btn-primary"]')
    buttonCreatePost.click()
    await new Promise(resolve => setTimeout(resolve, 2000));
    let titlePost = await this.driver.$('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]')
    titlePost.setValue('Post Pruebas Automatizadas')
    let descriptionPost = await this.driver.$('div[class="kg-prose"]')
    descriptionPost.setValue('Esta es un prueba automatizada para la universidad de los andes')
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
    let publishPost = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]')    
    publishPost.click()
    let settingsPost = await this.driver.$('button[class="gh-publish-setting-title "]')
    settingsPost.click()
    let datePost = await this.driver.$('div[class="gh-radio "]')
    datePost.click()
    await new Promise(resolve => setTimeout(resolve, 2000));
    let acceptChanges = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-large"]')
    acceptChanges.click()
    await new Promise(resolve => setTimeout(resolve, 2000));
    let confirmPublish = await this.driver.$('button[data-test-button="confirm-publish"]')
    confirmPublish.click()
})

Then('the admin validates the scheduled publication', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let backEditor = await this.driver.$('button[class="gh-btn-editor gh-publish-back-button"]')
    backEditor.click()
    let backPost = await this.driver.$('a[class="ember-view gh-btn-editor gh-editor-back-button"]')
    backPost.click()
    let validationTitlePost = await this.driver.$('h3[class="gh-content-entry-title"]')
    validationTitlePost.contains('Post Pruebas Automatizadas')
    await new Promise(resolve => setTimeout(resolve, 4000));
    await takeScreenshot(this.driver);
})
