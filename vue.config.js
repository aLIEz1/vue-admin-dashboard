module.exports = {
    lintOnSave: false,
    css:{
        loaderOptions:{
            sass:{
                prependData:`   
                      @import "src/global-styles/colors.scss";
                      @import "src/global-styles/typography.scss";
                          `
            }
        }
    }
}