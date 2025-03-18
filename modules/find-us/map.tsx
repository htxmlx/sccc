"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Coordinates for Church
const CARLES_COORDINATES: [number, number] = [
    123.13588880393448, 11.57462661653217,
];

const MapboxExample = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const initializeMap = () => {
            mapboxgl.accessToken =
                process.env.NEXT_PUBLIC_MAPBOX_TOKEN ||
                "pk.eyJ1IjoiYXprcml2ZW4xNiIsImEiOiJjbGhma3IxaWcxN3c3M2VyM3VhcGsxcHk3In0.pto_0eshW9NHMP-m1O_blg";

            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current!,
                style: "mapbox://styles/mapbox/satellite-v9",
                center: CARLES_COORDINATES,
                zoom: 16,
                attributionControl: false,
                dragRotate: false,
                touchZoomRotate: false,
                doubleClickZoom: false,
            });

            // Add controls
            mapRef.current.addControl(
                new mapboxgl.NavigationControl(),
                "top-right"
            );
            mapRef.current.addControl(
                new mapboxgl.ScaleControl(),
                "bottom-right"
            );
            mapRef.current.addControl(
                new mapboxgl.FullscreenControl(),
                "bottom-right"
            );
            mapRef.current.addControl(
                new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true,
                    },
                    trackUserLocation: true,
                }),
                "top-left"
            );
            mapRef.current.addControl(
                new mapboxgl.AttributionControl({
                    compact: true,
                }),
                "bottom-left"
            );

            // Add marker for Carles
            new mapboxgl.Marker()
                .setLngLat(CARLES_COORDINATES)
                .setPopup(
                    new mapboxgl.Popup().setHTML("<h3>Carles, Philippines</h3>")
                )
                .addTo(mapRef.current);
        };

        if (!mapRef.current) {
            initializeMap();
        }

        // Cleanup on unmount
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={mapContainerRef}
            style={{
                height: "100vh",
                width: "100%",
                minHeight: "400px",
                borderRadius: "8px",
                overflow: "hidden",
            }}
        />
    );
};

export default MapboxExample;
