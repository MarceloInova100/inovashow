package com.frontend_app.service

import com.frontend_app.dto.DashboardResponse

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