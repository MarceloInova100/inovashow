package com.frontend_app.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.reactive.function.client.WebClient

@Configuration
class WebClientConfig {

    @Bean
    fun dashboardWebClient(): WebClient {
        return WebClient.builder()
            .baseUrl("http://localhost:3000/api")
            .build()
    }
}