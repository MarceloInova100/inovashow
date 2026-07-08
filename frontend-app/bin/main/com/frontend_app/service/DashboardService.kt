package com.frontend_app.service

import com.frontend_app.dto.DashboardResponse
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient

@Service
class DashboardService(
    private val dashboardWebClient: WebClient
) {

    fun getDashboard(): DashboardResponse? {
        return dashboardWebClient
            .get()
            .uri("/dashboard")
            .retrieve()
            .bodyToMono(DashboardResponse::class.java)
            .block()
    }
}