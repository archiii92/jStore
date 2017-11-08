package jStore;

import jStore.configuration.JStoreConfiguration;
import jStore.configuration.WebConfig;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class JStoreInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{JStoreConfiguration.class};
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{WebConfig.class};
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }
}

//TODO: Migrate from angular-cli to webpack 3
//TODO: Migrate from bootstrap alpha to beta
//TODO Language service RUS-ENG
//TODO Form validation
//TODO Migrate from less to postCSS