"use client"
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts"
 const data = [
    {subject: "Frontend", value: 85},
    {subject: "Backend", value: 75},
    {subject: "Arquitectura", value: 55},
    {subject: "Base de Datados ", value: 40},
    {subject: "UI/UX", value: 82},
    {subject: "Clean Code", value: 45},

 ];

 export default function SkillsRadar(){

    return(
        <div className="w-full h-87.5">
            <ResponsiveContainer>
                <RadarChart data={data}>
                    <PolarGrid
                     stroke="#1e3a5f"
                    />
                    <PolarAngleAxis
                    dataKey="subject"
                    tick={{fill: "#93c5fd", fontSize: 12 }}
                    />
                    <Radar
                    dataKey="value"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.4} 
                    />
                </RadarChart>
            </ResponsiveContainer>

        </div>
    )
 }