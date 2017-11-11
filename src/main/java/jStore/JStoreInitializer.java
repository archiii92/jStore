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

//TODO Form validation
//TODO Migrate from Template-driven Forms to Reactive Forms

//TODO Language service RUS-ENG
//TODO: Migrate from bootstrap alpha to beta
//TODO Migrate from less to postCSS
